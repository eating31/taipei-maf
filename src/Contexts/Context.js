import React, { useState, createContext } from 'react'

export const Context = createContext()

export const ContextProvider = (props) => {

        // customer 點餐紀錄的會員等級
        const [ loginModal, setLoginModal] = useState(false)
        const [ signupModal, setSignupModal] = useState(false)


        const [ singleNewId, setSingleNewId] = useState(0)

        return (
            <Context.Provider value={{ loginModal, setLoginModal, signupModal, setSignupModal, singleNewId, setSingleNewId}}>
                {props.children}
            </Context.Provider>
        )
    }
