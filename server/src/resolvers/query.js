const config = require('config')
const { jsPDF } = require("jspdf")
const jwt = require('jsonwebtoken')
const storage = require('../firebase')
const img = require('../../config/img')
const jwt_decode = require('jwt-decode')
const font = require('../../config/font')
const pdf2base64 = require('pdf-to-base64')
const { ref, uploadString, getDownloadURL } = require("firebase/storage")


const uploadCertificate = async (file, code) => {
    if (file === null)
        return
    const fileRef = ref(storage, `certificates/${code}.pdf`)
    return await uploadString(fileRef, file, 'base64').then(async (res) => {
        return await getDownloadURL(res.ref).then(async (url) => {
            return url
        })
    })
}

const Query = {
    users: async (_, __, ctx) => {
        return await ctx.User.find()
    },
    coordinators: async (_, __, ctx) => {
        return await ctx.User.find({type: "Coordinator"})
    },
    logIn: async (_, { input }, ctx) => {
        const { email, password } = input
        const user = await ctx.User.findOne({email})
        const isPassValid = ctx.bcrypt.compareSync(password, user.password)
        if (!isPassValid)
            return 'Invalid password or email'
        const token = jwt.sign(
            {id: user._id},
            config.get("secretKey"),
            {expiresIn: '1h'}
        )
        return token
    },
    profile: async (_, { input }, ctx) => {
        const _id = jwt_decode(input).id
        const user = await ctx.User.findOne({_id})
        user.password = ""
        return user
    },
    profileImage: async (_, { input }, ctx) => {
        const { email, link } = input
        const user = await ctx.User.findOne({email})
        user.photo = link
        await user.save()
        return "User image was changed"
    },
    checkEmail: async (_, { input }, ctx) => {
        const user = await ctx.User.find({email: input})
        if (user)
            return true
        return false
    },
    checkCode: async (_, { input }, ctx) => {
        const user = await ctx.User.find({code: input})
        return {
            fullName: user.firstName + ' ' + user.secondName,
            country: user.country,
            volunteeringHours: user.volunteeringHours,
            type: user.type
        }
    },
    createCertificate: async (_, { input }, ctx) => {
        const user = await ctx.User.findOne({_id: input})
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

    events: async (_, __, ctx) => {
        const events = await ctx.Event.find()
        const date = new Date().toJSON().slice(0, 10)
        return events.filter(event => event.date >= date)
    },
    allEvents: async (_, __, ctx) => {
        return await ctx.Event.find()
    },
    allReports: async (_, __, ctx) => {
        return await ctx.Report.find()
    },

    allEducation: async (_, __, ctx) => {
        const countries = await ctx.Country.find()
        const universities = await ctx.University.find()
        return res.json({countries, universities})
    }
}

module.exports = Query