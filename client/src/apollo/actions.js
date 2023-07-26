import { gql } from '@apollo/client';

export const GET_USER = gql`
  query ($input: String) {
    profile(input: $input) {
      _id
      type
      photo
      email
      gender
      firstName
      instagram
      secondName
      location {
        city
        country
      }
      dateOfBirth
      phoneNumber
      telegramHandle
      volunteeringHours
      affiliation {
        type
        name
        studyYear
        degree
        location {
          city
          country
        }
      }
      joinedChat
      points
    }
  }
`;

export const GET_EVENTS = gql`
  query {
    events {
      date
      text
      type
      city
      title
      image
      format
      status
      number
      places
      plannedEndTime
      plannedStartTime
      registrationEndTime
      registrationStartTime
      createdAt
      duration
      partners
      registered {
        participantID
      }
    }
  }
`;

export const LOG_IN = gql`
  query ($logInInput: LogInInput!) {
    logIn(input: $logInInput) {
      token
      success
    }
  }
`;

export const GET_CERTIFICATE = gql`
  mutation ($input: String) {
    getCertificate(input: $input)
  }
`;

export const NEW_PROFILE_IMAGE = gql`
  mutation ($input: ImageInput) {
    profileImage(input: $input)
  }
`;

export const CHECK_EMAIL = gql`
  query ($input: String) {
    checkEmail(input: $input)
  }
`;

export const NEW_USER = gql`
  mutation ($input: UserInput) {
    newUser(input: $input)
  }
`;

export const EDIT_USER = gql`
  mutation ($input: UserInput) {
    editUser(input: $input)
  }
`;

export const CHECK_CODE = gql`
  query ($input: String) {
    checkCode(input: $input) {
      type
      year
      country
      name
      volunteeringHours
    }
  }
`;

export const GET_COORDINATORS = gql`
  query {
    coordinators {
      _id
      name
    }
  }
`;

export const NEW_EVENT = gql`
  mutation ($input: EventInput) {
    newEvent(input: $input)
  }
`;

export const GET_VOLUNTEERS = gql`
  query {
    users {
      _id
      name
      type
    }
  }
`;

export const CHANGE_STATUS = gql`
  mutation ($input: [StatusInput]) {
    changeStatus(input: $input)
  }
`;

export const NEW_REPORT = gql`
  mutation ($input: ReportInput) {
    newReport(input: $input)
  }
`;
