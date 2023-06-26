const { v4 } = require('uuid')
const { jsPDF } = require("jspdf")
const storage = require('../firebase')
const img = require('../../config/img')
const font = require('../../config/font')
const pdf2base64 = require('pdf-to-base64')
const { ref, uploadString, getDownloadURL } = require("firebase/storage")

const uploadImage = async (file, path) => {
  const fileRef = ref(storage, `${path}/${v4()}`)
  return await uploadString(fileRef, file, 'base64').then(async (res) => {
    return await getDownloadURL(res.ref).then(async (url) => {
      return url
    })
  })
}

const Mutation = {
  newUser: async (_, { input }, ctx) => {
    const hashPassword = await ctx.bcrypt.hash(input.password, 8)
    input.password = hashPassword
    input.type = 'Volunteer'
    input.registeredAt = new Date()
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
    return doc.save('cert.pdf').then(() => {
      return pdf2base64("cert.pdf").then((res) => {
        return res
      })
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

  newEvent: async (_, { input }, ctx) => {
    const event = new ctx.Event(input)
    const events = await ctx.Event.find()
    event.number = events.length + 1
    event.status = 'scheduled'
    event.createdAt = new Date()
    if (event.image.length) {
      event.image = await uploadImage(event.image.split(',')[1], 'events')
    }
    await event.save()
    return 'Event was created'
  },

  attendEvent: async (_, { input }, ctx) => {
    const date = new Date()
    const { name, eventID, userID } = input
    const event = await ctx.Event.findOne({_id: eventID})
    event.registered = [...event.registered, {
      participantID: _id,
      attended: false,
      registeredAt: date,
      name: name
    }]
    await event.save()
    const user = await ctx.User.findOne({_id: userID})
    user.events = [...user.events, {
      eventID,
      attended: false,
      registeredAt: date
    }]
    await user.save()
    return 'User ready to attend'
  },

  leaveEvent: async (_, { input }, ctx) => {
    const { eventID, userID } = input
    const event = await ctx.Event.findOne({_id: eventID})
    event.registered = event.registered.filter(item => item.participantID !== userID)
    await event.save()
    const user = await ctx.User.findOne({_id: userID})
    user.events = user.events.filter(item => item.eventID !== eventID)
    return 'User removed from attendance list'
  },

  newReport: async (_, { input }, ctx) => {
    const { eventID } = input
    const event = await ctx.Event.findOne({_id: eventID})
    delete input.eventID
    event.report = input
    await event.save()
    return "Report was created"
  },

  newCountry: async (_, { input }, ctx) => {
    const country = new ctx.Country({name: input, cities: []})
    await country.save()
    return "Country was created"
  },

  newCity: async (_, { input }, ctx) => {
    const { countryName, city } = input
    const country = await ctx.Country.findOne({name: countryName})
    country.cities = [...country.cities, {name: city}]
    await country.save()
    return "City was created"
  }
}

module.exports = Mutation