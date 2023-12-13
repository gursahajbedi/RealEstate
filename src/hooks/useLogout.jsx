import { useContext } from "react"
import useAuthContext from "../context/useAuthContext"



export default function useLogout(){
    const {dispatchs}=useAuthContext()
    const logout=async()=>{
        //removing user form the local storage
        localStorage.removeItem("user")
        localStorage.removeItem("wishlistArr")
        //dispatching null value
        await dispatchs({type:"logout"})
    }
    return {logout}
}