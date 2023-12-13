import { useContext } from "react"
import useAuthContext from "../context/useAuthContext"
import { WishlistContext } from "../context/WishlistContext"


export default function useLogout(){
    const {dispatchs}=useAuthContext()
    const {dispatch}=useContext(WishlistContext)
    const logout=async()=>{
        //removing user form the local storage
        localStorage.removeItem("user")
        dispatch({type:"LOAD",payload:[]})
        localStorage.removeItem("wishlistArr")
        //dispatching null value
        await dispatchs({type:"logout"})
    }
    return {logout}
}