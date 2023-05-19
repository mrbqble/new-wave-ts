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
        const user = await ctx.User.findOne({_id})
        const duplicate = await ctx.User.findOne({email})
        if(!duplicate) {
            user = input
            await user.save()
            return "User data was changed"
        }
        return "User with this email already exists"
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
        const uni = new ctx.University(input)
        await uni.save()
        return "University was created"
    },
    newEducation: async (_, { input }, ctx) => {
        const {name, city, school, college} = input
        let country = await ctx.Country.findOne({name})
        if (!country)
            country = new ctx.Country(input)
        if (city && !country.cities.find(item => item.name === city))
            country.cities = [...country.cities, {name: city, schools: []}]
        if (school && !country.cities.find(item => item.name === city).schools.find(item => item === school))
            country.cities.find(item => item.name === city).schools = [school, ...country.cities.find(item => item.name === city).schools]
        if (college && !country.colleges.find(item => item === college))
            country.colleges = [college, ...country.colleges]
        await country.save()
        return "Education was addded"
    }
}

module.exports = Mutation