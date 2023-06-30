const config = require('config')
const jwt = require('jsonwebtoken')
const jwt_decode = require('jwt-decode')
const { jsPDF } = require("jspdf")
const img = require('../../../config/img')
const font = require('../../../config/font')
const pdf2base64 = require('pdf-to-base64')
const uploadImage = require('../../firebase')

const resolvers = {
  Query: {
    users: async (_, __, ctx) => {
      const users = await ctx.User.find()
      return users.map((item) => {
        return {
          _id: item._id,
          name: item.firstName + ' ' + item.secondName,
          type: item.type
        }
      })
    },
  
    coordinators: async (_, __, ctx) => {
      const coordinators =  await ctx.User.find({type: "Coordinator"})
      return coordinators.map(user => {
        return {
          _id: user._id,
          name: user.firstName + ' ' + user.secondName
        }
      })
    },
  
    logIn: async (_, { input }, ctx) => {
      const { email, password } = input
      const user = await ctx.User.findOne({email})
      if (user) {
        const isPassValid = ctx.bcrypt.compareSync(password, user.password)
        if (!isPassValid)
          return {token: '', success: false}
        const token = jwt.sign(
          {id: user._id},
          config.get("secretKey"),
          {expiresIn: '1h'}
        )
        return {token, success: true}
      } else {
        return {token: '', success: false}
      }
    },
  
    profile: async (_, { input }, ctx) => {
      const _id = jwt_decode(input).id
      const user = await ctx.User.findOne({_id})
      return user
    },
  
    checkEmail: async (_, { input }, ctx) => {
      const user = await ctx.User.findOne({email: input})
      if (user)
        return true
      return false
    },
  
    checkCode: async (_, { input }, ctx) => {
      const user = await ctx.User.findOne({code: input})
      if (user) {
        return {
          type: user.type,
          country: user.country,
          year: user.code.split('-')[1],
          volunteeringHours: user.volunteeringHours,
          fullName: user.firstName + ' ' + user.secondName
        }
      }
    }
  },

  Mutation: {
    newUser: async (_, { input }, ctx) => {
      const hashPassword = await ctx.bcrypt.hash(input.password, 8)
      input.points = 0
      input.type = 'Volunteer'
      input.volunteeringHours = 0
      input.password = hashPassword
      input.registeredwAt = new Date()
      const user = new ctx.User(input)
      await user.save()
      return 'User was created'
    },
  
    editUser: async (_, { input }, ctx) => {
      const {_id, email} = input
      const duplicate = await ctx.User.find({email})
      if (duplicate.length > 1) {
        return "User with this email already exists"
      }
      const user = await ctx.User.findOne({_id})
      user.email = input.email
      user.gender = input.gender
      user.location = input.location
      user.instagram = input.instagram
      user.firstName = input.firstName
      user.secondName = input.secondName
      user.dateOfBirth = input.dateOfBirth
      user.affiliation = input.affiliation
      user.phoneNumber = input.phoneNumber
      await user.save()
      return "User data was changed"
    },
  
    profileImage: async (_, { input }, ctx) => {
      const { email, base64 } = input
      const user = await ctx.User.findOne({email})
      user.photo = await uploadImage(base64, 'users')
      await user.save()
      return "User image was changed"
    },
  
    getCertificate: async (_, { input }, ctx) => {
      const user = await ctx.User.findOne({email: input})
      const certificates = await ctx.Certificate.find()
      const year = new Date().getFullYear()
      const doc = new jsPDF({
        orientation: "landscape"
      })
      const code = `CRTF-${year}-KZ-VOL-${certificates.length + 1}-${user.firstName.toUpperCase()}`
      const certificate = new ctx.Certificate({
        ownerID: user._id,
        requestedAt: new Date(),
        volunteeringHours: user.volunteeringHours,
        code: code
      })
      await certificate.save()
      user.certificateRequests = [...user.certificateRequests, certificates.length]
      await user.save()
      doc.addImage(img, 'PNG', 0, 0, 297, 210)
      doc.addFileToVFS("MyFont.ttf", font)
      doc.addFont("MyFont.ttf", "MyFont", "normal")
      doc.setFont("MyFont")
      doc.setFontSize(48)
      doc.setTextColor(1, 27, 99)
      doc.text(user.firstName + " " + user.secondName, 150, 85, {maxWidth: 200, align: "center"})
      doc.setFontSize(20)
      doc.setTextColor(0, 0, 0)
      doc.text(`was volunteering for ${user.volunteeringHours} hours in ${year} in ${user.location.country}, ${user.location.city}`, 150, 100, {maxWidth: 150, align: "center"})
      doc.setFontSize(12)
      doc.setTextColor(255, 255, 255)
      doc.text(code, 10, 197)
      doc.save('cert.pdf')
      return pdf2base64("cert.pdf").then((res) => {
        return res
      })
    },
  
    changeStatus: async (_, { input }, ctx) => {
      input.map(async (item) => {
        const { _id, type } = item
        const user = await ctx.User.findOne({_id})
        user.type = type
        await user.save()
      })
      return 'Status was changed'
    },
  }
}

module.exports = resolvers