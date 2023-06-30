const _ = require('apollo-server-core')

const typeDefs = _.gql`
  type Organizator {
    organizatorID: String
    fullName: String
  }

  type Coordinates {
    latitude: Int
    longtitude: Int
  }

  input CoordinatesInput {
    latitude: Int
    longtitude: Int
  }

  type Registered {
    participantID: String
    attended: Boolean
    registeredAt: String
    name: String
  }

  input RegisteredInput {
    participantID: String
    attended: Boolean
    registeredAt: String
    name: String
  }

  type Details {
    planted: Int
    bags: Int
    area: Int
    metal: Int
    plastic: Int
    paper: Int
    glass: Int
  }

  input DetailsInput {
    planted: Int
    bags: Int
    area: Int
    metal: Int
    plastic: Int
    paper: Int
    glass: Int
  }

  type Report {
    eventId: String
    text: String
    actualStartTime: String
    actualEndTime: String
    mediaFolder: String
    previewImages: [String]
    details: Details
  }

  input ReportInput {
    eventId: String
    text: String
    actualStartTime: String
    actualEndTime: String
    mediaFolder: String
    previewImages: [String]
    details: DetailsInput
  }

  type Event {
    date: String
    text: String
    type: String
    city: String
    title: String
    image: String
    format: String
    status: String
    number: Int
    places: Int
    plannedEndTime: String
    plannedStartTime: String
    registrationEndTime: String
    registrationStartTime: String
    createdAt: String
    duration: Int
    partners: [String]
    organizators: [Organizator]
    coordinates: Coordinates
    registered: [Registered]
    report: Report
  }

  input OrganizatorInput {
    fullName: String
    organizatorID: String
  }

  input EventInput {
    date: String
    text: String
    type: String
    city: String
    title: String
    image: String
    format: String
    status: String
    number: Int
    places: Int
    plannedEndTime: String
    plannedStartTime: String
    registrationEndTime: String
    registrationStartTime: String
    createdAt: String
    duration: Int
    partners: [String]
    organizators: [OrganizatorInput]
    coordinates: CoordinatesInput
    registered: [RegisteredInput]
    report: ReportInput
  }

  input AttendanceInput {
    _id: String
    email: String
  }

  extend type Query {
    events: [Event]
    allEvents: [Event]
    allReports: [Report]
  }

  extend type Mutation {
    newEvent(input: EventInput): String
    newReport(input: ReportInput): String
    leaveEvent(input: AttendanceInput): String
    attendEvent(input: AttendanceInput): String
  }
`

module.exports = typeDefs