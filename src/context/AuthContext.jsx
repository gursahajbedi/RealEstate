import { createContext,useEffect } from "react";
import { useReducer } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const initialValue={user:null}

export const AuthContext=createContext(initialValue)

// eslint-disable-next-line react-refresh/only-export-components
export const reducer=(state,action)=>{
    switch(action.type){
        case 'login':
            return {user:action.payload}
        case 'logout':
            return {user:null}
    }
}

// eslint-disable-next-line react/prop-types
export const AuthContextProvider=({children})=>{
    const [value,dispatchs]=useReducer(reducer,initialValue)

    useEffect(()=>{
        const user=JSON.parse(localStorage.getItem("user"))
        console.log(user)
        dispatchs({type:"login",payload:user})
        
    },[dispatchs])

    console.log("AuthContext:",value)

    return (
        <AuthContext.Provider value={{value,dispatchs}}>
            {children}
        </AuthContext.Provider>
    )
}