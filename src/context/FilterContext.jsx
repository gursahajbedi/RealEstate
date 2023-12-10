import { createContext } from "react";

export const initialvalue={home:"All"}

export const FilterContext=createContext(initialvalue)

export const reducer=(state,action)=>{
    switch(action.type){
        case 'login':
            return {user:action.payload}
        case 'logout':
            return {user:null}
    }
}

