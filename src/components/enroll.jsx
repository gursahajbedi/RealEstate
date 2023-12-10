import { useState } from 'react'

export default function Enroll(){
    const [email,setemail]=useState()
    const [message,setmessage]=useState()
    const [subject,setsubject]=useState()
    const [name,setname]=useState()
    const [confirm,setconfirm]=useState(false)

    const submitContact =async(e)=>{
        e.preventDefault()
    }
    return(
        <div className='form mb-5' onSubmit={submitContact}>
            {confirm && (<div className='container'>
                <h3 className='btn btn-block btn-success disabled mt-4'>Message Sent!</h3>
            </div>)}
            {!confirm && (<div className='mt-4'></div>)}
           <form onSubmit={(e)=>{submitContact(e)}} className='form container'>
                <h1 className='display-3 fw-normal border-bottom border-2 border-dark mb-5'>Enroll with Us</h1>
                <div className='bg-dark mb-5' style={{width:"100%",height:"500px"}}>
                    <img style={{width:'100%',height:'100%', objectFit:'cover'}} src="https://st4.depositphotos.com/2903611/29109/i/450/depositphotos_291093158-stock-photo-man-social-network-icons.jpg"></img>
                </div>
                <div className='container'>
                    <h1 className='display-6 fw-normal border-bottom border-2 border-dark mb-4'>Name</h1>
                    <input onChange={(e)=>{setname(e.target.value)}} className='form-control fs-3 mb-4'/>
                </div>
                <div className='container'>
                    <h1 className='display-6 fw-normal border-bottom border-2 border-dark mb-4'>Email</h1>
                    <input onChange={(e)=>{setemail(e.target.value)}} className='form-control fs-3 mb-4'/>
                </div>
                <div className='container'>
                    <h1 className='display-6 fw-normal border-bottom border-2 border-dark mb-4'>Subject</h1>
                    <input onChange={(e)=>{setsubject(e.target.value)}} className='form-control mb-4 fs-3'/>
                </div>
                <div className='container'>
                    <h1 className='display-6 fw-normal border-bottom border-2 border-dark mb-4'>Message</h1>
                    <textarea rows={5} onChange={(e)=>{setmessage(e.target.value)}} className='mb-4 form-control fs-3'/>
                </div>
                <button type="submit" className=" ms-3 btn btn-success"><h1 className='h3 fw-normal'>Submit</h1></button>
            </form> 
        </div>
    )
}