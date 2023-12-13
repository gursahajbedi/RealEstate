import axios from "axios"
import useAuthContext from "../context/useAuthContext"
import { useState } from "react"


export default function useLogin(){
    
    const {dispatchs}=useAuthContext()
    const [isloading,setloading]=useState(false)
    const [err,seterr]=useState('')

    async function login(email,password){
        setloading(true)
        const body={"email":email,"password":password}
        await axios.post("http://localhost:8000/api/token/",body).then((res)=>{
            if(res.status===200){
                const updatedwusername={...res.data,email:email}
                //updating the local storage
                localStorage.setItem("user",JSON.stringify(updatedwusername))
                localStorage.setItem("wishlistArr",JSON.stringify({"wishlist":[]}))
                console.log("user logged in")
                //updating the Auth Context
                dispatchs({
                    type: 'login' ,payload:updatedwusername
                })
            }
            else{
                seterr(res.response.data.err)
            }
        }).catch((res)=>{return res})
        setloading(false)
    }
    return {login,err,isloading}
}
