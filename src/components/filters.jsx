import { useContext, useEffect, useState } from "react"
import { FilterContext } from "../context/FilterContext"

export default function Filters(){
    const {dispatch}=useContext(FilterContext)
    const [homeType,setHomeType]=useState('apartment')
    const [saleType,setSaleType]=useState('for sale')
    const [price,setPrice]=useState('Any')
    const [bathrooms,setBathrooms]=useState('1+')
    const [bedrooms,setBedrooms]=useState("1+")
    const [sqft,setSqft]=useState('Any')
    const [age,setAge]=useState('50-')
    const [open,setOpen]=useState(true)

    useEffect(()=>{
      console.log(price)
    })

    function handleprice(e){
      const price=e.target.value
      if (price==="1000000"){
        setPrice(`Any`)
      }
      else{
        setPrice(`${price}-`)
      }
    }
    function handlepriceRent(e){
      const price=e.target.value
      if (price==="10000"){
        setPrice(`Any`)
      }
      else{
        setPrice(`${price}-`)
      }
    }

    function handleSubmit(e){
        e.preventDefault()
          dispatch({type:'home_type',payload:homeType})
          dispatch({type:"sale_type",payload:saleType})
          dispatch({type:"price",payload:price})
          dispatch({type:"bathrooms",payload:bathrooms})
          dispatch({type:"bedrooms",payload:bedrooms})
          dispatch({type:"sqft",payload:sqft})
          dispatch({type:"property_age",payload:age})
          dispatch({type:"open_house",payload:open})
    }

    return(
        <div>
            <form>
                <div className="container-fluid d-flex flex-column align-items-center my-3">
                    <label>
                      <h1 className="h5">
                        Home Type:
                      </h1>
                    </label>
                    <div className="h6 fw-bold">
                        <input
                          className="mx-2"
                          type="radio"
                          value="apartment"
                          checked={homeType === 'apartment'}
                          onChange={(e) => setHomeType(e.target.value)}
                        />
                        Apartment
                        <input
                          className="mx-2"
                          type="radio"
                          value="condo"
                          checked={homeType === 'condo'}
                          onChange={(e) => setHomeType(e.target.value)}
                        />
                        Condo
                        <input
                          className="mx-2"
                          type="radio"
                          value="townhouse"
                          checked={homeType === 'townhouse'}
                          onChange={(e) => setHomeType(e.target.value)}
                        />
                        TownHouse
                        <input
                          className="mx-2"
                          type="radio"
                          value="house"
                          checked={homeType === 'house'}
                          onChange={(e) => setHomeType(e.target.value)}
                        />
                        House
                    </div>
                </div>
                <div className="container-fluid d-flex flex-column align-items-center my-3">
                    <label>
                      <h1 className="h5">
                        Sale Type:
                      </h1>
                    </label>
                    <div className="h6 fw-bold">
                        <input
                          className="mx-2"
                          type="radio"
                          value="for rent"
                          checked={saleType === 'for rent'}
                          onChange={(e) => {setSaleType(e.target.value);setPrice('Any')}}
                        />
                        Rent
                        <input
                          className="mx-2"
                          type="radio"
                          value="for sale"
                          checked={saleType === 'for sale'}
                          onChange={(e) => {setSaleType(e.target.value);setPrice('Any')}}
                        />
                        Sale
                    </div>
                </div>
                {saleType=="for sale" &&(
                  <div className="container-fluid d-flex flex-column align-items-center justify-content-center form-slider my-3">
                        <label><h1 className="h5 form-label">Budget Under:<span className="fw-bold ps-2">{price!=='Any'?`₹${price.slice(0,price.length-1)}`:'Any'}</span></h1></label>
                        <input type="range" className="container form-range" min={1000000} max={100000000} step={1000000} value={price==='Any'?1000000:parseInt(price)} onChange={(e)=>{handleprice(e)}}></input>
                  </div>
                )}
                {saleType=="for rent" &&(
                  <div className="container-fluid d-flex flex-column align-items-center justify-content-center form-slider my-3">
                      <label><h1 className="h5 form-label">Budget Under:<span className="fw-bold ps-2">{price!=='Any'?`₹${price.slice(0,price.length-1)}`:'Any'}</span></h1></label>
                      <input type="range" className="container form-range" min={10000} max={500000} step={10000} value={price==='Any'?10000:parseInt(price)} onChange={(e)=>{handlepriceRent(e)}}></input>
                  </div>
                )}
                <div className="container d-flex flex-row justify-content-between">
                  <div>
                  <div className="container-fluid d-flex flex-column align-items-center my-3">
                    <label>
                      <h1 className="h5">Bathrooms:</h1>
                    </label>
                    <div className="h6 fw-bold">
                      <input
                        className="mx-2"
                        type="radio"
                        value="1+"
                        checked={bathrooms === '1+'}
                        onChange={(e) => setBathrooms(e.target.value)}
                      />
                      1+
                      <input
                        className="mx-2"
                        type="radio"
                        value="2+"
                        checked={bathrooms === '2+'}
                        onChange={(e) => setBathrooms(e.target.value)}
                      />
                      2+
                      <input
                        className="mx-2"
                        type="radio"
                        value="3+"
                        checked={bathrooms === '3+'}
                        onChange={(e) => setBathrooms(e.target.value)}
                      />
                      3+
                      <input
                        className="mx-2"
                        type="radio"
                        value="4+"
                        checked={bathrooms === '4+'}
                        onChange={(e) => setBathrooms(e.target.value)}
                      />
                      4+
                      <input
                        className="mx-2"
                        type="radio"
                        value="5+"
                        checked={bathrooms === '5+'}
                        onChange={(e) => setBathrooms(e.target.value)}
                      />
                      5+
                    </div>
                  </div>
                  <div className="container-fluid d-flex flex-column align-items-center my-3">
                    <label>
                      <h1 className="h5">Bedrooms:</h1>
                    </label>
                    <div className="h6 fw-bold">
                      <input
                        className="mx-2"
                        type="radio"
                        value="1+"
                        checked={bedrooms === '1+'}
                        onChange={(e) => setBedrooms(e.target.value)}
                      />
                      1+
                      <input
                        className="mx-2"
                        type="radio"
                        value="2+"
                        checked={bedrooms === '2+'}
                        onChange={(e) => setBedrooms(e.target.value)}
                      />
                      2+
                      <input
                        className="mx-2"
                        type="radio"
                        value="3+"
                        checked={bedrooms === '3+'}
                        onChange={(e) => setBedrooms(e.target.value)}
                      />
                      3+
                      <input
                        className="mx-2"
                        type="radio"
                        value="4+"
                        checked={bedrooms === '4+'}
                        onChange={(e) => setBedrooms(e.target.value)}
                      />
                      4+
                      <input
                        className="mx-2"
                        type="radio"
                        value="5+"
                        checked={bedrooms === '5+'}
                        onChange={(e) => setBedrooms(e.target.value)}
                      />
                      5+
                    </div>
                  </div>
                  </div>
                  <div>
                  <div className="container-fluid d-flex flex-column align-items-center my-3">
                    <label>
                      <h1 className="h5">Space (In Sqft):</h1>
                    </label>
                    <div className="h6 fw-bold">
                      <input
                        className="mx-2"
                        type="radio"
                        value="Any"
                        checked={sqft === 'Any'}
                        onChange={(e) => setSqft(e.target.value)}
                      />
                      Any
                      <input
                        className="mx-2"
                        type="radio"
                        value="500+"
                        checked={sqft === '500+'}
                        onChange={(e) => setSqft(e.target.value)}
                      />
                      500+
                      <input
                        className="mx-2"
                        type="radio"
                        value="1200+"
                        checked={sqft === '1200+'}
                        onChange={(e) => setSqft(e.target.value)}
                      />
                      1200+
                      <input
                        className="mx-2"
                        type="radio"
                        value="2400+"
                        checked={sqft === '2400+'}
                        onChange={(e) => setSqft(e.target.value)}
                      />
                      2400+
                      <input
                        className="mx-2"
                        type="radio"
                        value="3600+"
                        checked={sqft === '3600+'}
                        onChange={(e) => setSqft(e.target.value)}
                      />
                      3600+
                    </div>
                  </div>
                  <div className="container-fluid d-flex flex-column align-items-center my-3">
                    <label className="h5">
                      Age of Property:
                    </label>
                    <div className="fw-bold h6">
                      <input
                        className="mx-2"
                        type="radio"
                        value="1-"
                        checked={age === '1-'}
                        onChange={(e) => setAge(e.target.value)}
                      />
                      Less than 1
                      <input
                        className="mx-2"
                        type="radio"
                        value="5-"
                        checked={age === '5-'}
                        onChange={(e) => setAge(e.target.value)}
                      />
                      Less than 5
                      <input
                        className="mx-2"
                        type="radio"
                        value="10-"
                        checked={age === '10-'}
                        onChange={(e) => setAge(e.target.value)}
                      />
                      Less than 10 
                      <input
                        className="mx-2"
                        type="radio"
                        value="20-"
                        checked={age === '20-'}
                        onChange={(e) => setAge(e.target.value)}
                      />
                      Less than 20
                    </div>
                  </div>
                  </div>
                  </div>
                  <div className="container form-check form-switch d-flex justify-content-around my-3">
                    <div>
                    <input type="checkbox" className="container form-check-input" id="customSwitch1" checked={open===true} onChange={()=>{setOpen((e)=>!e)}}/>
                    <label className="form-check-label container " htmlFor="customSwitch1"><h1 className="h5">Open House</h1></label>
                    </div>
                  </div>
                <button type="submit" className="btn btn-success" onClick={(e)=>{handleSubmit(e)}}>Submit</button>
                
            </form>
        </div>
    )
}