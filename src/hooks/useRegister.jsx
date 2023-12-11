import axios from "axios"
import useAuthContext from "../context/useAuthContext"
import { useState } from "react"


export default function useRegister(){
    
    useAuthContext()
    const [err,seterr]=useState('')
    const [isloading,setloading]=useState(false)

    async function signup(email,password,username){
        setloading(true)
        const body={"email":email,"password":password,"name":username,"password2":password}
        const res=await axios.post("http://localhost:8000/api/accounts/signup",body).then((res)=>{return res}).catch((res)=>{return res})
        if(res.status===200){
            console.log("user added")
        }
        else{
            seterr(res.response.data.err)
        }
        setloading(false)
    }
    return {signup,err,isloading}
}
