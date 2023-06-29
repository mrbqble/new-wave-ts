const _ = require('apollo-server-core')

const typeDefs = _.gql`
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

  input LocationInput {
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

  input AffiliationInput {
    type: String
    name: String
    studyYear: Int
    degree: String
    location: LocationInput
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

  type User {
    _id: ID
    points: Int
    type: String
    photo: String
    tasks: [Task]
    email: String
    gender: String
    firstName: String
    instagram: String
    secondName: String
    location: Location
    dateOfBirth: String
    phoneNumber: String
    joinedChat: Boolean
    events: [UserEvent]
    telegramHandle: String
    volunteeringHours: Int
    affiliation: Affiliation
    inviteLinks: [InviteLink]
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
    name: String
    country: String
    volunteeringHours: Int
  }

  type Volunteer {
    _id: ID
    name: String
    type: String
  }

  type Coordinator {
    _id: ID
    name: String
  }

  type LogInOutput {
    token: String
    success: Boolean
  }

  extend type Query {
    users: [Volunteer]
    coordinators: [Coordinator]
    profile(input: String): User
    checkEmail(input: String): Boolean
    checkCode(input: String): CodeOutput
    logIn(input: LogInInput!): LogInOutput
  }

  extend type Mutation {
    newUser(input: UserInput): String
    editUser(input: UserInput): String
    getCertificate(input: String): String
    profileImage(input: ImageInput): String
    changeStatus(input: [StatusInput]): String
  }
`

module.exports = typeDefs