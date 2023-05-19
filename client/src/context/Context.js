import React, { createContext , useState} from 'react'
const context = createContext()

function Context({ children }) {

    const [user, setUser] = useState()
    const [events, setEvents] = useState()
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const contextValues = {
        user,
        setUser,
        events,
        setEvents,
        isLoggedIn,
        setIsLoggedIn,
    }

    return <context.Provider value={contextValues}>{children}</context.Provider>
}

export const useContext = () => {
    return React.useContext(context)
}

export default Context