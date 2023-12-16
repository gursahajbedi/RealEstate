import axios from 'axios';
import { useContext, useEffect, useState } from 'react';import useAuthContext from '../context/useAuthContext';
import { RealtorContext } from '../context/RealtorContext';


export default function Profile(){
    const {realtorValue,Rdispatch}=useContext(RealtorContext)
    const [contactEmail,setCEmail]=useState("")
    const [contact,setContact]=useState("")
    const [file,setfile]=useState("")
    const [desc,setDesc]=useState("")
    const [name,setName]=useState("")
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false)

    const{auth}=useAuthContext()

    const handleSubmit =async(event) => {
        event.preventDefault();
        setLoading(true)
        
        await axios.patch("http://localhost:8000/api/accounts/user/update/",{
            'email_optional' : contactEmail,
            'phone' : contact,
            'description': desc,
            'photo':file,
            "name":name
        },{
            headers:{
                Authorization:"Bearer "+ auth.user.access,
                "Content-Type":"multipart/form-data"
            }
            
        }).then((res)=>{
            if(file && desc && contact && contactEmail){
                Rdispatch({type:"SET",payload:true})
            }
            else{
                Rdispatch({type:"SET",payload:false})
            }
            setLoading(false)
        })
        
    }

    useEffect(()=>{
        const getProfile=async()=>{
            await axios.get(`http://localhost:8000/api/accounts/${auth.user.id}`,{
                headers:{Authorization:`Bearer ${auth.user.access}`}
            }).then((res)=>{
                setCEmail(res.data.email_optional)
                setContact(res.data.phone)
                setDesc(res.data.description)
                setName(res.data.name)
                setfile(res.data.photo)
                setData(res.data)
            })
        }
        getProfile()
        setLoading(false)
    },[])

    useEffect(()=>{
        const getProfile=async()=>{
            await axios.get(`http://localhost:8000/api/accounts/${auth.user.id}`,{
                headers:{Authorization:`Bearer ${auth.user.access}`}
            }).then((res)=>{
                setData(res.data)
            })
        }
        getProfile()
    },[data])

    return (
        <div className='container bg-light py-4 border border-3 mt-4 d-flex flex-column align-items-center'>
            <div className='d-flex justify-content-center flex-column align-items-center bg-dark rounded-5 text-light p-4' style={{"width":"600px"}}>
                <div>
                    <img src={data.photo?data.photo:"https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max"} className="border border-4 border-light" height={"300px"} width={"300px"} style={{objectFit:"cover","borderRadius":"50%"}}></img>
                </div>
                <div className='h1 mt-3'>
                    {data.name}
                </div>
                <div className='h4 mt-2'>
                    {data.email}
                </div>
            </div>
            <h1 className='h2 mt-5 border-bottom border-dark'>Become a Realtor:</h1>
            <p>To start adding Listings on our website, please fill out your Realtor Details first</p>
            {!loading && <form onSubmit={handleSubmit} className='d-flex flex-column justify-content-center align-items-center'>
                <div className='container d-flex flex-column' style={{width:"900px"}}>
                    <div>
                        <label><h1 className='h4 fw-bold my-3'>Name</h1></label>
                        <input 
                            className='form-control'
                            type="text" 
                            name="name" 
                            placeholder="Name" 
                            value={name} 
                            required={true}
                            onChange={(e)=>setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label><h1 className='h4 fw-bold my-3 d-flex flex-row align-items-center'>Contact Email<span className='ps-3 fs-6 fw-normal'>(Contact email is different from Account email, users can contact you with the following email.<br/> Account and Contact email can be same)</span></h1></label>
                        <input 
                            className='form-control'
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            value={contactEmail} 
                            required={true}
                            onChange={(e)=>setCEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label><h1 className='h4 fw-bold my-3'>Mobile</h1></label>
                        <input
                            className='form-control'
                            type="text" 
                            name="phoneNumber" 
                            placeholder="Phone Number" 
                            value={contact} 
                            required={true}
                            onChange={(e)=>setContact(e.target.value)}
                        />
                    </div>
                    <div>
                        <label><h1 className='h4 fw-bold my-3'>Realtor Picture</h1></label>
                        <input 
                            className='form-control'
                            type="file" 
                            name="profilePic" 
                            required={true}
                            onChange={(e)=>setfile(e.target.files[0])}
                        />
                    </div>
                    <div>
                        <label><h1 className='h4 fw-bold my-3'>Description</h1></label>
                        <textarea 
                            className='form-control'
                            name="description"
                            rows={10} 
                            placeholder="Description" 
                            value={desc} 
                            required={true}
                            onChange={(e)=>setDesc(e.target.value)}
                        />
                    </div>
                    <div>
                        <button type="submit" className='btn btn-primary my-3'>Update Profile</button>
                    </div>
                </div>
            </form>
            }
            {loading && (
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <div className='d-flex flex-column' style={{width:"900px"}}>
                        <div className="container d-flex justify-content-center align-items-center" style={{height:"600px"}}>
                            <div className="spinner-border" style={{width:"5rem",height:"5rem"}} role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
