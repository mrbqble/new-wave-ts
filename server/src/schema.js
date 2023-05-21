const gql = require('graphql-tag')

const typeDefs = gql`
    type User {
        city: String
        code: String
        type: String
        photo: String
        grade: String
        degree: String
        gender: String
        school: String
        email: String!
        country: String
        telegram: String
        password: String!
        firstName: String
        instagram: String
        secondName: String
        dateOfBirth: String
        affiliation: String
        phoneNumber: String
        volunteeringHours: Int
    }

    input UserInput {
        city: String
        code: String = ""
        type: String = "Volunteer"
        photo: String = ""
        grade: String
        degree: String
        gender: String
        school: String
        email: String!
        country: String
        telegram: String
        password: String!
        firstName: String
        instagram: String
        secondName: String
        dateOfBirth: String
        affiliation: String
        phoneNumber: String
        volunteeringHours: Int = 0
    }

    input LogInInput {
        email: String!
        password: String!
    }

    input ImageInput {
        link: String
        email: String
    }

    input StatusInput {
        type: String
        email: String
    }

    type CodeOutput {
        type: String
        country: String
        fullName: String
        volunteeringHours: Int
    }

    type Event {
        number: Int
        places: Int
        date: String
        text: String
        type: String
        city: String
        title: String
        image: String
        format: String
        status: String
        endTime: String
        mapLink: String
        addInfo: String
        duration: String
        location: String
        startTime: String
        attended: [String]
        partners: [String]
        organizators: [String]
    }

    input EventInput {
        number: Int
        places: Int
        date: String
        text: String
        type: String
        city: String
        title: String
        image: String
        format: String
        endTime: String
        mapLink: String
        addInfo: String
        duration: String
        location: String
        startTime: String
        partners: [String]
        status: String = "New"
        organizators: [String]
        attended: [String] = []
    }

    input AttendanceInput {
        _id: String
        email: String
    }

    type Report {
        bags: Int
        distance: Int
        addInfo: String
        eventID: String
        attended: [String]
    }

    input ReportInput {
        bags: Int
        distance: Int
        addInfo: String
        eventID: String
        attended: [String]
    }

    input CityInput {
        name: String
        schools: [String]
    }

    input CountryInput {
        name: String
        colleges: [String]
        cities: [CityInput]
    }

    type City {
        name: String
        schools: [String]
    }

    type Country {
        name: String
        cities: [City]
        colleges: [String]
    }

    type LogInOutput {
        token: String
        success: Boolean
    }

    type Query {
        users: [User]
        coordinators: [User]
        profile(input: String): User
        logIn(input: LogInInput!): LogInOutput
        checkEmail(input: String): Boolean
        checkCode(input: String): CodeOutput
        profileImage(input: ImageInput): String
        createCertificate(input: String): String

        events: [Event]
        allEvents: [Event]
        allReports: [Report]

        allCountries: [Country]
        allUniversities: [String]
    }

    type Mutation {
        newUser(input: UserInput): String
        editUser(input: UserInput): String
        changeStatus(input: [StatusInput]): String
        
        newEvent(input: EventInput): String
        newReport(input: ReportInput): String
        leaveEvent(input: AttendanceInput): String
        attendEvent(input: AttendanceInput): String

        newUniversity(input: String): String
        newEducation(input: CountryInput): String
    }
`

module.exports = typeDefs