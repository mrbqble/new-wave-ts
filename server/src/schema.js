const gql = require('graphql-tag')

const typeDefs = gql`
  type User {
    _id: ID
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
    _id: ID
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
    password: String
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
    email: String
    base64: String
  }

  input StatusInput {
    _id: ID
    type: String
  }

  type CodeOutput {
    year: Int
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
    country: String
    endTime: String
    addInfo: String
    duration: Int
    location: String
    startTime: String
    attended: [String]
    partners: [String]
    locationLink: String
    coordinators: [String]
  }

  input EventInput {
    places: Int
    date: String
    text: String
    type: String
    city: String
    title: String
    image: String
    format: String
    country: String
    endTime: String
    addInfo: String
    duration: Int
    location: String
    startTime: String
    partners: [String]
    locationLink: String
    status: String = "New"
    coordinators: [String]
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

  input CityInput {
    city: String
    countryName: String
  }

  input SchoolInput {
    school: String
    cityName: String
    countryName: String
  }

  input CollegeInput {
    college: String
    countryName: String
  }

  type Coordinator {
    _id: ID
    name: String
  }

  type Volunteer {
    _id: ID
    name: String
    type: String
  }

  type Query {
    users: [Volunteer]
    coordinators: [Coordinator]
    profile(input: String): User
    checkEmail(input: String): Boolean
    checkCode(input: String): CodeOutput
    logIn(input: LogInInput!): LogInOutput
    
    events: [Event]
    allEvents: [Event]
    allReports: [Report]
    
    allCountries: [Country]
    allUniversities: [String]
  }
  
  type Mutation {
    newUser(input: UserInput): String
    editUser(input: UserInput): String
    getCertificate(input: String): String
    profileImage(input: ImageInput): String
    changeStatus(input: [StatusInput]): String
    
    newEvent(input: EventInput): String
    newReport(input: ReportInput): String
    leaveEvent(input: AttendanceInput): String
    attendEvent(input: AttendanceInput): String

    newCity(input: CityInput): String
    newCountry(input: String): String
    newUniversity(input: String): String
    newSchool(input: SchoolInput): String
    newCollege(input: CollegeInput): String
  }
`

module.exports = typeDefs