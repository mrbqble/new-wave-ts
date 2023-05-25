import { gql } from "@apollo/client"

export const GET_USER = gql`
  query($input: String) {
    profile(input: $input) {
      _id
      code
      city
      type
      photo
      grade
      degree
      gender
      school
      email
      country
      telegram
      firstName
      instagram
      secondName
      dateOfBirth
      affiliation
      phoneNumber
      volunteeringHours
    }
  }
`

export const GET_EVENTS = gql`
  query {
    allEvents {
      number
      places
      date
      text
      type
      city
      title
      image
      format
      status
      endTime
      mapLink
      addInfo
      duration
      location
      startTime
      attended
      partners
      organizators
    }
  }
`

export const LOG_IN = gql`
query($logInInput: LogInInput!) {
  logIn(input: $logInInput) {
    token
    success
  }
}
`

export const GET_CERTIFICATE = gql`
  mutation($input: String) {
    getCertificate(input: $input)
  }
`

export const NEW_PROFILE_IMAGE = gql`
  mutation($input: ImageInput) {
    profileImage(input: $input)
  }
`

export const CHECK_EMAIL = gql`
  query($input: String) {
    checkEmail(input: $input)
  }
`

export const GET_EDUCATION = gql`
  query {
    allCountries {
      name
      cities {
        name
        schools
      }
      colleges
    }
    allUniversities
  }
`

export const NEW_USER = gql`
  mutation($input: UserInput) {
    newUser(input: $input)
  }
`

export const EDIT_USER = gql`
  mutation($input: UserInput) {
    editUser(input: $input)
  }
`

export const NEW_UNIVERSITY = gql`
  mutation($input: String) {
    newUniversity(input: $input)
  }
`

export const NEW_COUNTRY = gql`
  mutation($input: String) {
    newCountry(input: $input)
  }
`

export const NEW_CITY = gql`
  mutation($input: CityInput) {
    newCountry(input: $input)
  }
`

export const NEW_SCHOOL = gql`
  mutation($input: SchoolInput) {
    newCountry(input: $input)
  }
`

export const NEW_COLLEGE = gql`
  mutation($input: CollegeInput) {
    newCountry(input: $input)
  }
`

export const CHECK_CODE = gql`
  query($input: String) {
    checkCode(input: $input) {
      type
      year
      country
      fullName
      volunteeringHours
    }
  }
`

export const GET_COUNTRIES = gql`
  query {
    allCountries {
      name
      cities {
        name
      }
    }
  }
`

export const GET_COORDINATORS = gql`
  query {
    coordinators {
      _id
      name
    }
  }
`

export const NEW_EVENT = gql`
  mutation($input: EventInput) {
    newEvent(input: $input)
  }
`