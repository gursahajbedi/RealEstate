import { useEffect, useState } from "react"
import axios from 'axios'
import useAuthContext from "../context/useAuthContext"

export default function AddListing(){
    const {auth}=useAuthContext()

    const [formdata,setFormdata]=useState({
        "sale_type":"For Sale",
        "home_type":"Apartment",
        "address":"",
        "city":"",
        "state":"",
        "zipcode":"",
        "bedrooms":'',
        "bathrooms":'',
        "sqft":'',
        "furniture_type":'Unfurnished',
        "property_age":'',
        "tenant_type":'',
        "photo_main":'',
        "price":'',
        "desc":"",
        "title":'',
        "open_house":true
    })

    const [coverImg,setCoverImg]=useState(null)
    const handleCoverImg=(e)=>{
        setCoverImg(URL.createObjectURL(e.target.files[0]));
    }

    const [inputs, setInputs] = useState([1])
    const addInput = (e) => {
        e.preventDefault()
        setInputs([...inputs, inputs.length + 1]);
      };

    const [progress,setprogress]=useState(0)
    const [isloading,setloading]=useState(false)

    const [stage,setstage]=useState(1)

    const handlesubmit=async(e)=>{
        e.preventDefault()
        setloading(true)
        await axios.post("http://localhost:8000/api/listings/add",{
            ...formdata,
            "slug":formdata.title.toLowerCase().replace(/ /g, '-'),
            "title":formdata.title,
            "address":formdata.address,
            "city":formdata.address,
            "state":formdata.state,
            "zipcode":formdata.zipcode,
            "desc":formdata.desc,
            "sale_type":formdata.sale_type,
            "price":formdata.price,
            "bedrooms":formdata.bedrooms,
            "bathrooms":formdata.bathrooms,
            "home_type":formdata.home_type,
            "sqft":formdata.sqft,
            "open_house":formdata.open_house,
            "photo_main":formdata.photo_main,
            "property_age":formdata.property_age,
            "furniture_type":formdata.furniture_type,
            "tenant_type":formdata.tenant_type

        },{
            headers:{
                Authorization:"Bearer " + auth.user.access,
                "Content-Type":"multipart/form-data"
            }
        }).then((res)=>{
            console.log(res.data)
            setloading(false)
        })
    }

    useEffect(()=>{
        console.log(formdata)
        console.log(auth.user)
        console.log(coverImg)
        setloading(false)
    },[auth.user,formdata,coverImg])

    return(
        <div className="container pt-3 mt-3 d-flex flex-row">
            <div className="d-flex flex-column p-3 bg-light">
                <button className="btn btn-primary my-2" onClick={()=>{setstage(1);setprogress(0);}}>Stage 1</button>
                <button className="btn btn-primary my-2" onClick={()=>{setstage(2);setprogress(25);}}>Stage 2</button>
                <button className="btn btn-primary my-2" onClick={()=>{setstage(3);setprogress(50);}}>Stage 3</button>
                <button className="btn btn-primary my-2" onClick={()=>{setstage(4);setprogress(75);}}>Stage 4</button>
                <button className="btn btn-primary my-2" onClick={()=>{setstage(5);setprogress(100);}}>Stage 5</button>
                <div className="progress">
                  <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow={`${progress}`} aria-valuemin="0" aria-valuemax="100" style={{width:`${progress}%`}}></div>
                </div>
            </div>
            {!isloading && (<div className="d-flex flex-column bg-light flex-grow-1 align-items-center justify-content-center">
                {stage===1 && (
                <form className="form container d-flex flex-column">
                    <div className="form-group">
                      <label htmlFor="sale_type">Sale Type</label>
                      <select className="form-control" id="sale_type" required name="sale_type" onChange={(e)=>{setFormdata({...formdata,"sale_type":e.target.value})}} value={formdata.sale_type}>
                        <option value="For Sale" >Sale</option>
                        <option value="For Rent">Rent</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="home_type">Home Type</label>
                      <select className="form-control" id="home_type" required value={formdata.home_type} name="home_type" onChange={(e)=>{setFormdata({...formdata,"home_type":e.target.value})}}>
                        <option value="Apartment">Apartment</option>
                        <option value="House">House</option>
                        <option value="Condo">Condo</option>
                        <option value="Townhouse">Townhouse</option>
                      </select>
                    </div>
                    <div className="container form-check form-switch d-flex justify-content-around mt-3 py-3 pt-4">
                        <div>
                            <input type="checkbox" className="container form-check-input" id="customSwitch2" checked = {formdata['open_house']===true} onChange={()=>{setFormdata({...formdata,"open_house":!formdata.open_house})}}/>
                            <label className="form-check-label container " htmlFor="customSwitch2"><h1 className="h5">Open House</h1></label>
                        </div>
                  </div>
                </form>
                )}
                {stage===2 && (
                <form className="form container d-flex flex-column">
                    <label>
                      Address:
                      <input type="text" className="form-control" name="address" required value={formdata.address} onChange={(e)=>{setFormdata({...formdata,"address":e.target.value})}}/>
                    </label>
                    <label>
                      City:
                      <input type="text" className="form-control" name="city" required value={formdata.city} onChange={(e)=>{setFormdata({...formdata,"city":e.target.value})}}/>
                    </label>
                    <label>
                      State:
                      <input type="text" className="form-control" name="state" required value={formdata.state} onChange={(e)=>{setFormdata({...formdata,"state":e.target.value})}}/>
                    </label>
                    <label>
                      Zipcode:
                      <input type="text" className="form-control" name="zipcode" required value={formdata.zipcode} onChange={(e)=>{setFormdata({...formdata,"zipcode":e.target.value})}}/>
                    </label>
                </form>
                )}
                {stage===3 && (
                   <form className="form container d-flex flex-column">
                    <label>
                      Bedrooms:
                      <input type="number" className="form-control" name="bedrooms" required value={formdata.bedrooms} onChange={(e)=>{setFormdata({...formdata,"bedrooms":e.target.value})}}/>
                    </label>
                    <label>
                      Bathrooms:
                      <input type="number" className="form-control" name="bathrooms" required value={formdata.bathrooms} onChange={(e)=>{setFormdata({...formdata,"bathrooms":e.target.value})}}/>
                    </label>
                    <label>
                      Area (By sqft):
                      <input type="number" className="form-control" name="sqft" required value={formdata.sqft} onChange={(e)=>{setFormdata({...formdata,"sqft":e.target.value})}}/>
                    </label>
                    <label>
                      Age of Property:
                      <input type="number" className="form-control" name="property_age" required value={formdata.property_age} onChange={(e)=>{setFormdata({...formdata,"property_age":e.target.value})}}/>
                    </label>
                    <div className="form-group">
                      <label htmlFor="furniture_type">Furniture Type</label>
                      <select className="form-control" id="furniture_type" name="furniture_type" required value={formdata.furniture_type} onChange={(e)=>{setFormdata({...formdata,"furniture_type":e.target.value})}} >
                        <option value="Unfurnished">Unfurnished</option>
                        <option value="Semi Furnished">Semi Furnished</option>
                        <option value="Fully Furnished">Fully Furnished</option>
                      </select>
                    </div>
                        {formdata['sale_type']==="For Rent" && (
                            <div className="form-group">
                                <label htmlFor="tenant_type">Willing to Rent out to:</label>
                                <select className="form-control" id="tenant_type" name="tenant_type" required value={formdata.tenant_type} onChange={(e)=>{setFormdata({...formdata,"tenant_type":e.target.value})}} >
                                  <option value="">Select</option>
                                  <option value="Single men">Single Men</option>
                                  <option value="Single women">Single Women</option>
                                  <option value="Couples">Couples</option>
                                </select>
                            </div>
                        )}
                   </form>)} 
                {stage===4 && (
                    <form className="form container d-flex flex-column align-items-center">
                        <h1 className="fs-6"><a href="https://www.ieplads.com/mailers/2016/99acres/photoguideline/index.html">Photo Guide</a></h1>
                        {coverImg &&(
                            <img src={coverImg} className="p-4" height={"300px"} width={"100%"} style={{objectFit:"cover"}}/>
                        )}
                        <label>
                        {/* Image Showing Later */}
                        Cover Photo:
                        <input type="file" className="form-control" required name="photo_main" onChange={(e)=>{setFormdata({...formdata,"photo_main":e.target.files[0]});handleCoverImg(e)}}/>
                        </label>
                        <label>
                            <div className="d-flex flex-column" style={{width:"600px"}}>
                            {/* Image Showing Later */}
                            Gallery:
                            {inputs.map((input) => (
                                  <input key={input} required className="form-control mb-3" value={formdata[`photo${input}`] && ((formdata[`photo${input}`]))} type="file" onChange={(e)=>{setFormdata({...formdata,[`photo_${input}`]:e.target.files[0]})}}/>
                                ))}
                                <button className="btn btn-primary" onClick={(e)=>addInput(e)}>Add More</button>
                            </div>
                        </label>
                    </form>
                )}
                {stage===5 && (
                    <form className="form container d-flex flex-column">
                        <label>
                            Title:
                            <input type="text" required className="form-control" value={formdata.title} name="title" onChange={(e)=>{setFormdata({...formdata,"title":e.target.value})}}/>
                        </label>
                        <label>
                            Price:
                            <input type="number" required className="form-control" value={formdata.price} name="price" onChange={(e)=>{setFormdata({...formdata,"price":e.target.value})}}/>
                        </label>
                        <label>Description
                            <textarea 
                                className='form-control'
                                name="description"
                                rows={10} 
                                placeholder="Description" 
                                required={true}
                                value={formdata.description}
                                onChange={(e)=>{setFormdata({...formdata,"description":e.target.value})}}
                            />
                        </label>
                        <button className="btn btn-primary" onClick={(e)=>{handlesubmit(e)}}>Add Listing</button>
                    </form> 
                )}
            </div>
            )}
            {isloading &&(
                <div className="d-flex flex-column bg-light flex-grow-1 align-items-center justify-content-center">
                    <div className="spinner-border" style={{width:"5rem",height:"5rem"}} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
        </div>
    )
}