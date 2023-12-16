import axios from 'axios'
import { useState } from 'react'

export default function Contact(){
    const [email,setemail]=useState()
    const [message,setmessage]=useState()
    const [subject,setsubject]=useState()
    const [name,setname]=useState()
    const [confirm,setconfirm]=useState(false)

    const submitContact =async(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/contact/',{name,email,subject,message}).then((res)=>{
            setconfirm(true)
        }).catch((err)=>{
            setconfirm(false)
        })
    }
    return(
        <div className='container form mt-5 mb-5 bg-light border border-3 ' style={{width:"900px"}} onSubmit={submitContact}>
            {confirm && (<div className='container'>
                <h3 className='btn btn-block btn-success disabled mt-4'>Message Sent!</h3>
            </div>)}
            {!confirm && (<div className='mt-4'></div>)}
            <h1 className='display-5 fw-normal border-bottom border-2 mb-4 d-flex justify-content-center mt-5'>Contact Us</h1>
           <form onSubmit={(e)=>{submitContact(e)}} className='form container'>
                <div className='container'>
                    <h1 className='h4 fw-normal mb-4'>Name</h1>
                    <input onChange={(e)=>{setname(e.target.value)}} className='form-control fs-6 mb-4'/>
                </div>
                <div className='container'>
                    <h1 className='h4 fw-normal '>Email</h1>
                    <input onChange={(e)=>{setemail(e.target.value)}} className='form-control fs-6 mb-4'/>
                </div>
                <div className='container'>
                    <h1 className='h4 fw-normal '>Subject</h1>
                    <input onChange={(e)=>{setsubject(e.target.value)}} className='form-control mb-4 fs-6'/>
                </div>
                <div className='container'>
                    <h1 className='h4 fw-normal '>Message</h1>
                    <textarea rows={5} onChange={(e)=>{setmessage(e.target.value)}} className='mb-4 form-control fs-6'/>
                </div>
                <div className='pb-3'>
                    <button type="submit" className=" ms-3 btn btn-success"><h1 className='h5 fw-normal'>Submit</h1></button>
                </div>
            </form> 
        </div>
    )
}
