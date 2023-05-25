const { v4 } = require('uuid')
const { jsPDF } = require("jspdf")
const storage = require('../firebase')
const img = require('../../config/img')
const font = require('../../config/font')
const pdf2base64 = require('pdf-to-base64')
const { ref, uploadString, getDownloadURL } = require("firebase/storage")

const uploadCertificate = async (file, code) => {
  const fileRef = ref(storage, `certificates/${code}.pdf`)
  return await uploadString(fileRef, file, 'base64').then(async (res) => {
    return await getDownloadURL(res.ref).then(async (url) => {
      return url
    })
  })
}

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
    user.city = input.city
    user.email = input.email
    user.grade = input.grade
    user.gender = input.gender
    user.degree = input.degree
    user.school = input.school
    user.country = input.country
    user.telegram = input.telegram
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
    const year = new Date().getFullYear()
    const doc = new jsPDF({
      orientation: "landscape"
    })
    if (!user.code || user.code?.split("-")[1] !== year) {
      user.code = `CRTF-${year}-KZ-${user.type === 'Volunteer' ? 'VOL' : "CRD"}-0078-${user.firstName.toUpperCase()}`
    }
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
    doc.text(`was volunteering for ${user.volunteeringHours} hours in ${user.year} in ${user.country}, ${user.city}`, 150, 100, {maxWidth: 150, align: "center"})
    doc.setFontSize(12)
    doc.setTextColor(255, 255, 255)
    doc.text(user.code, 10, 197)
    return pdf2base64("cert.pdf").then((res) => {
      return uploadCertificate(res, user.code)
    })
  },

  changeStatus: async (_, { input }, ctx) => {
    input.map(async (item) => {
      const { email, type } = item
      const user = await ctx.User.find({email})
      user.type = type
      await user.save()
    })
    return 'Status was changed'
  },

  newEvent: async (_, { input }, ctx) => {
    const event = new ctx.Event(input)
    const events = await ctx.Event.find()
    event.number = events.length + 1
    if (event.image.length) {
      event.image = await uploadImage(event.image.split(',')[1], 'events')
    }
    await event.save()
    return 'Event was created'
  },

  attendEvent: async (_, { input }, ctx) => {
    const { email, _id } = input
    const event = await ctx.Event.findOne({_id})
    event.attended = [...event.attended, email]
    await event.save()
    return 'User ready to attend'
  },

  leaveEvent: async (_, { input }, ctx) => {
    const { email, _id } = input
    const event = await ctx.Event.findOne({_id})
    event.attended = event.attended.filter(item => item.email !== email)
    await event.save()
    return 'User ready removed from attendance list'
  },

  newReport: async (_, { input }, ctx) => {
    const { eventID, attended } = input
    const candidate = await ctx.Report.findOne({eventID})
    const event = await ctx.Event.findOne({_id: eventID})
    if (candidate)
      return `Report with id ${eventID} already exists`
    attended.map(async (item) => {
      const user = await ctx.User.findOne({_id: item})
      if (user)
        user.volunteeringHours += parseInt(event.duration)
      await user.save()
    })
    const report = new ctx.Report(input)
    await report.save()
    return "Report was created"
  },

  newUniversity: async (_, { input }, ctx) => {
    const university = new ctx.University(input)
    await university.save()
    return "University was created"
  },

  newCountry: async (_, { input }, ctx) => {
    const country = new ctx.Country({name: input, cities: [], colleges: []})
    await country.save()
    return "Country was created"
  },

  newCity: async (_, { input }, ctx) => {
    const { countryName, city } = input
    const country = await ctx.Country.findOne({name: countryName})
    country.cities = [...country.cities, {name: city, schools: []}]
    await country.save()
    return "City was created"
  },

  newSchool: async (_, { input }, ctx) => {
    const { countryName, cityName, school } = input
    const country = await ctx.Country.findOne({name: countryName})
    const city = country.cities.find(item => item.name === cityName)
    city.schools = [...city.schools, school]
    country.cities = [...country.cities.filter(item => item.name !== cityName), city]
    await country.save()
    return "School was created"
  },

  newCollege: async (_, { input }, ctx) => {
    const { countryName, college } = input
    const country = await ctx.Country.findOne({name: countryName})
    country.colleges = [...country.colleges, college]
    await country.save()
    return "College was created"
  }
}

module.exports = Mutation