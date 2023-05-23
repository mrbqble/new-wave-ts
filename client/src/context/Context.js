import { gql, useLazyQuery } from '@apollo/client'
import React, { createContext , useState, useEffect} from 'react'

const context = createContext()

const GET_USER = gql`
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

const GET_EVENTS = gql`
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

function Context({ children }) {

  const [user, setUser] = useState()
  const [events, setEvents] = useState()
  const [getEvents] = useLazyQuery(GET_EVENTS)
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [isLoggedIn, setIsLoggedIn] = useState(token ? true : false)
  const [getUser, { refetch }] = useLazyQuery(GET_USER, { variables: {input: token}})

  const refetchUser = () => {
    refetch()
      .then(res => setUser(res.data.profile))
      .catch(() => alert('apollo server error'))
  }

  const contextValues = {
    user,
    events,
    setUser,
    setToken,
    setEvents,
    isLoggedIn,
    refetchUser,
    setIsLoggedIn,
  }

  useEffect(() => {
    if (token) {
      getUser()
        .then(res => setUser(res.data.profile))
        .catch(() => alert('apollo server error'))
    }
    getEvents()
      .then(res => setEvents(res.data.allEvents))
      .catch(() => alert('apollo server error'))
  }, [])

  return <context.Provider value={contextValues}>{children}</context.Provider>
}

export const useContext = () => {
  return React.useContext(context)
}

export default Context