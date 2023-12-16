import { useEffect, useState } from "react"
import useRegister from "../hooks/useRegister"
import { Link, useNavigate } from "react-router-dom"


export default function Register(){

    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const navigate=useNavigate()

    const {signup,isloading}=useRegister()

    const onRegister=(async(e)=>{
        e.preventDefault()
        await signup(email,password,name)
        if(!isloading){
            navigate('/login')
        }
    })

    return(
        <div>
        {!isloading?(<div className="container my-5 border-3 bg-light border p-3">
            <h1 className="display-3 fw-normal border-bottom border-2 border-dark mb-5">Register</h1>
            <div className="container-fluid">
                <form>
                    <div className="form-group">
                        <label className="display-6 fw-normal border-bottom border-2 border-dark mb-4">Name</label>
                        <input type="name" className="form-control fs-3 mb-4" onChange={(e)=>{setname(e.target.value)}}/>
                        <label className="display-6 fw-normal border-bottom border-2 border-dark mb-4">Email</label>
                        <input type="email" className="form-control fs-3 mb-4" onChange={(e)=>{setemail(e.target.value)}}/>
                        <label className="display-6 fw-normal border-bottom border-2 border-dark mb-4">Password</label>
                        <input type="password" className="form-control fs-3 mb-4" onChange={(e)=>{setpassword(e.target.value)}}/>
                        <br/>
                        <button className="mb-4 btn btn-success" onClick={onRegister}><h1 className='h3 fw-normal'>Register</h1></button>
                        <h3>Already Registered Continue to <Link to="/login">Login</Link></h3>
                    </div>
                </form>
            </div>
        </div>):(
            <div className="container d-flex justify-content-center align-items-center" style={{height:"600px"}}>
                <div className="spinner-border" style={{width:"5rem",height:"5rem"}} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )}
        </div>
    )
}