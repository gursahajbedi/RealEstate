import axios from 'axios'
import { useEffect, useState } from 'react'
import useAuthContext from '../context/useAuthContext'

export default function Realtor(prop){
    const[data,setdata]=useState({})
    const{value}=useAuthContext()
    axios.defaults.headers.common['Authorization']=`Bearer ${value.user.access}`
    

    const realtorinfo = async()=>{
        await axios.get(`http://localhost:8000/api/realtors/${prop.realtor}`).then((res)=>{
            setdata(res.data)
            console.log(res.data)
        })
    }

    useEffect(()=>{
        console.log(prop.realtor)
        realtorinfo()
    },[value.user])

    return(
        <div className='d-flex flex-row flex-wrap mt-5 justify-content-center'>
            <div className='card'>
                <img style={{"width":"300px", "height":"400px","objectFit":"cover"}} src={data.photo}></img>
            </div>
            <div className='d-flex flex-column align-items-start justify-content-center'>
                <div className='display-6 p-5 pt-3 pb-0 fw-normal'>
                    Realtor: {data.name}
                </div>
                <div className='h4 ms-5 fw-normal text-secondary mb-3'>
                    {data.description}
                </div>
                <hr/>
                <div className='ms-5 btn btn-outline-dark border border-2 border-primary'>
                    <h2>Mobile : +91 {data.phone}</h2>
                </div>
                <div className='mt-4 ms-5 btn btn-outline-dark border border-2 border-primary'>
                    <h2>E-Mail : {data.email}</h2>
                </div>
            </div>
        </div>
    )
}
