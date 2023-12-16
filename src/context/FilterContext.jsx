import { createContext, useReducer } from "react"

export const initialValue={
    "home_type":"Any",
    "sale_type": "For Sale",
    "price": "Any",
    "bedrooms": "1+",
    "bathrooms": "1+",
    "sqft": "Any",
    "days_listed": "Any",
    "property_age": "20-",
    "open_house":true,
    "keywords": ""
}

export const FilterContext = createContext(initialValue)

export function FilterReducer(state,action){
    switch(action.type){
        case "home_type":
            return{...state,"home_type":action.payload}
        case 'sale_type':
            return{...state,"sale_type": action.payload}
        case 'price':
            return{...state,"price": action.payload}
        case 'bedrooms':
            return{...state,"bedrooms": action.payload}
        case 'bathrooms':
            return{...state,"bathrooms":action.payload}
        case 'sqft':
            return{...state,"sqft":action.payload}
        case 'days_listed':
            return{...state,"days_listed":action.payload}
        case 'property_age':
            return{...state,"property_age":action.payload}
        case 'open_house':
            return{...state,"open_house":action.payload}
        case 'keywords':
            return{...state,"keywords": action.payload}
        default:
            return state;
    }
}

// eslint-disable-next-line react/prop-types
export const FilterProvider=({children})=>{
    const [filterState,dispatch] = useReducer(FilterReducer,initialValue);

    return(
        <FilterContext.Provider value={{filterState, dispatch}}>
            {children}
        </FilterContext.Provider>
    )
}