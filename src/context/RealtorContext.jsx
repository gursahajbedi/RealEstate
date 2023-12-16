import {createContext, useReducer } from "react";

export const initalValue={
    isRealtor:false
}

export const RealtorContext=createContext(initalValue)

export const RealtorReducer=(state,action)=>{
    switch (action.type) {
        case 'SET':
            return {isRealtor:action.payload}
        default:
            return initalValue
    }
}

// eslint-disable-next-line react/prop-types
export const RealtorContextProvider=({children})=>{
    const [realtorValue,Rdispatch]=useReducer(RealtorReducer,initalValue)

    console.log(realtorValue)

    return(
        <RealtorContext.Provider value={{realtorValue,Rdispatch}}>
            {children}
        </RealtorContext.Provider>
    )
}