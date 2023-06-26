const gql = require('graphql-tag')

const typeDefs = gql`
  type InviteLink {
    link: String
    used: Boolean
    joinedAt: String
    expired: Boolean
    createdAt: String
    expireTime: String
  }

  type Location {
    city: String
    country: String
  }

  type Affiliation {
    type: String
    name: String
    studyYear: Int
    degree: String
    location: Location
  }

  type UserEvent {
    eventID: String
    attended: Boolean
    checkInTime: String
    registeredAt: String
    checkOutTime: String
  }

  type Task {
    text: String
    status: String
    issuerID: String
    createdAt: String
    completedAt: String
  }

  input LocationInput {
    city: String
    country: String
  }

  input AffiliationInput {
    type: String
    name: String
    studyYear: Int
    degree: String
    location: LocationInput
  }

  type User {
    _id: ID
    points: Int
    type: String
    photo: String
    tasks: [Task]
    email: String
    gender: String
    leavedAt: String
    firstName: String
    instagram: String
    telegramID: String
    secondName: String
    location: Location
    dateOfBirth: String
    phoneNumber: String
    joinedChat: Boolean
    events: [UserEvent]
    registeredAt: String
    telegramHandle: String
    volunteeringHours: Int
    affiliation: Affiliation
    inviteLinks: [InviteLink]
    certificateRequests: [Int]
  }

  input UserInput {
    _id: ID
    email: String
    gender: String
    password: String
    firstName: String
    instagram: String
    secondName: String
    dateOfBirth: String
    phoneNumber: String
    location: LocationInput
    affiliation: AffiliationInput
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
    duration: Int
    title: String
    image: String
    format: String
    status: String
    country: String
    endTime: String
    addInfo: String
    location: String
    startTime: String
    attended: [String]
    partners: [String]
    locationLink: String
    coordinators: [String]
  }

  input OrganizatorInput {
    fullName: String
    organizatorID: String
  }

  input EventInput {
    places: Int
    date: String
    text: String
    type: String
    city: String
    title: String
    image: String
    duration: Int
    format: String
    addInfo: String
    location: String
    partners: [String]
    locationLink: String
    organizators: [OrganizatorInput]
    plannedEndTime: String
    plannedStartTime: String
    registrationEndTime: String
    registrationStartTime: String
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