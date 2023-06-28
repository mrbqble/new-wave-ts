import { useLazyQuery } from '@apollo/client'
import React, { createContext , useState, useEffect} from 'react'
import { GET_EVENTS, GET_USER } from '../apollo/actions'

const context = createContext()

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
      .catch(() => alert('apollo server error (Context refetch user)'))
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
    getEvents
  }

  useEffect(() => {
    if (token) {
      getUser()
        .then(res => setUser(res.data.profile))
        .catch(() => alert('apollo server error (Context getUser token)'))
    }
    getEvents()
      .then(res => setEvents(res.data.allEvents))
      .catch(() => alert('apollo server error (Context after token - getEvents)'))
  }, [])

  return <context.Provider value={contextValues}>{children}</context.Provider>
}

export const useContext = () => {
  return React.useContext(context)
}

export default Context