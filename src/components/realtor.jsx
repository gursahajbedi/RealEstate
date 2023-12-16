import axios from 'axios'
import { useEffect, useState } from 'react'
import useAuthContext from '../context/useAuthContext'

export default function Realtor(prop){
    const[data,setdata]=useState({})
    const{auth}=useAuthContext()
    axios.defaults.headers.common['Authorization']=`Bearer ${auth.user.access}`
    

    const realtorinfo = async()=>{
        await axios.get(`http://localhost:8000/api/accounts/${prop.realtor}`).then((res)=>{
            setdata(res.data)
            console.log(res.data)
        })
    }

    useEffect(()=>{
        console.log(prop.realtor)
        realtorinfo()
    },[auth.user])

    return(
        <div className='d-flex flex-row flex-wrap mt-5 justify-content-center align-items-center'>
            <div className='d-flex align-items-center'>
                <img className="" style={{"width":"300px", "height":"300px","objectFit":"cover","borderRadius":"100%"}} src={data.photo}></img>
            </div>
            <div className='d-flex flex-column align-items-start justify-content-center'>
                <div className='h2 p-5 pt-3 pb-0 fw-normal'>
                    Realtor: {data.name}
                </div>
                <div className='h5 ms-5 fw-normal text-secondary'>
                    {data.description}
                </div>
                <hr/>
                <div className='ms-5 btn btn-outline-dark border border-2 border-primary'>
                    <h5>Mobile : +91 {data.phone}</h5>
                </div>
                <div className='mt-2 ms-5 btn btn-outline-dark border border-2 border-primary'>
                    <h5>E-Mail : {data.email}</h5>
                </div>
            </div>
        </div>
    )
    
}
