import useAuthContext from "../context/useAuthContext"

export default function useLogout(){
    const {dispatchs}=useAuthContext()
    const logout=async()=>{
        //removing user form the local storage
        localStorage.removeItem("user")
        //dispatching null value
        await dispatchs({type:"logout"})
    }
    return {logout}
}