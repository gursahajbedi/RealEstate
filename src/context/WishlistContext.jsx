/* eslint-disable no-case-declarations */
import { createContext, useEffect, useReducer } from "react";

export const initialvalue={wishlist:[]}

export const WishlistContext=createContext(initialvalue)

export const reducer=(state,action)=>{
    switch(action.type){
        case 'LOAD':
            localStorage.setItem('wishlistArr',JSON.stringify({wishlist:action.payload}))
            return {wishlist:action.payload}
        case 'ADD':
            if(!state.wishlist.includes(action.payload)){
                const data={wishlist:[action.payload,...state.wishlist]}
                localStorage.setItem('wishlistArr',JSON.stringify(data))
                return {wishlist:[action.payload,...state.wishlist]}
            }
            else{
                return state
            }
        case 'REMOVE':
            
            const wishlist=state.wishlist
            const newwl=wishlist.filter((item)=>{
                if (item.id !== action.payload['id']){
                    return item
                }
            })
            localStorage.setItem('wishlistArr',JSON.stringify({wishlist:newwl}))
            return {wishlist:newwl}

        default:
            return state
    }
}

// eslint-disable-next-line react/prop-types
export const WishlistContextProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialvalue)
    
    useEffect(()=>{
        const data=localStorage.getItem("wishlistArr")
        if (data){
            const newdata=JSON.parse(data)
            if(newdata.wishlist.length!==0){
                const wishlist=newdata.wishlist
                dispatch({type:"LOAD",payload:wishlist})
            }
        }
        if(!data){
            const newdata=[]
            dispatch({type:"LOAD",payload:newdata})
        }
    },[])

    useEffect(()=>{
        
    })

    return(
        <WishlistContext.Provider value={{state,dispatch}}>
            {children}
        </WishlistContext.Provider>
    )

}
