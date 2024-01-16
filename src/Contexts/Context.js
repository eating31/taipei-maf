import React, { useState, createContext } from 'react'

export const Context = createContext()

export const ContextProvider = (props) => {

        // customer 點餐紀錄的會員等級
        const [ orderLevel, setOrderLevel] = useState(0)

        return (
            <Context.Provider value={{  orderLevel, setOrderLevel}}>
                {props.children}
            </Context.Provider>
        )
    }
