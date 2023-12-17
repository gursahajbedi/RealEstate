import { NavLink } from "react-router-dom";
import useAuthContext from "../context/useAuthContext";
import { useContext, useEffect, useState } from "react";
import { WishlistContext } from "../context/WishlistContext";
import "./listing.css"


export default function Listing(prop){
    const { state,dispatch }=useContext(WishlistContext)
    const { auth } = useAuthContext();
    const [wish,setwish]=useState()

    const today=new Date()
    const posted=new Date(prop.data.list_date)
    const diff=Math.round((today-posted) / (1000 * 60 * 60 * 24));

    const findWish=()=>{
            const xy=state.wishlist.filter((item)=>{
                if (item.id===prop.data.id){
                    return item
                }
            })
            if(xy.length!=0){
                setwish(true)
            }
            else{
                setwish(false)
            }
    }

    useEffect(()=>{
        findWish()
    },[state,findWish])

    return(
        <div className="bg-light card m-3 border border-3" style={{"width":"50rem","height":"1010px"}}>
            <div>
                {prop.data.verified &&(
                    <div id='verified-badge' className="m-2 p-0 d-flex flex-row bg-light align-items-center rounded-4">
                        <span className="material-symbols-outlined fs-2" >verified</span>
                        <h1 className="fs-5 pt-2 me-1 border-bottom border-dark">R.E <span className="fs-6">Verified</span></h1>
                    </div>
                )}
                {auth.user && (<div className="ps-3 mt-1" id='wishlist-button'>
                        {!wish && (<button className="btn p-0 text-light d-flex align-items-center" onClick={()=>{dispatch({type:"ADD",payload:prop.data})}}><span className="material-symbols-outlined" id="like">favorite_border</span></button>)}
                        {wish && (<button className="btn p-0 text-danger d-flex align-items-center" onClick={()=>{dispatch({type:"REMOVE",payload:{id:prop.data.id}})}}><span className="material-icons" id="like">favorite</span></button>)}
                </div>)}
                <img style={{objectFit:"cover","width":"100%", height:"500px"}} src={prop.data.photo_main}></img>
            </div>
            <NavLink  to={auth.user?'/property':'/login'} state={prop.data} className="text-decoration-none text-black">
            <div className="d-flex flex-row">
                <div className="flex-grow-1 p-3">
                    <div className="d-flex flex-wrap">
                      <h4>{prop.data.title}</h4>
                    </div>
                    <h5>{prop.data.city}, {prop.data.state}</h5>
                    <h6>{prop.data.sqft} sqft</h6>
                    <div className="d-flex flex-wrap gap-3 mt-4">
                        <span className="btn btn-outline-success text-dark fw-bold ">Bathrooms: {prop.data.bathrooms}</span>
                        <span className="btn btn-outline-success text-dark fw-bold ">Bedrooms: {prop.data.bedrooms}</span>
                        <span className="btn btn-outline-success text-dark fw-bold ">{prop.data.home_type}</span>
                        <span className="btn btn-outline-success text-dark fw-bold ">Property Age: {prop.data.property_age}</span>
                        <span className="btn btn-outline-success text-dark fw-bold ">{prop.data.furniture_type}</span>
                    </div>
                </div>
                <div className=" d-flex flex-column p-3">
                    <h1 className="border-bottom border-3 border-dark me-3">₹{prop.data.price}</h1>
                </div>
                {
                    prop.data.sale_type==="For Rent"&&(
                        <div className="bg-danger d-flex flex-column justify-content-center align-items-center p-3 rounded-bottom-5">
                            <h3>R</h3>
                            <h3>E</h3>
                            <h3>N</h3>
                            <h3>T</h3>
                        </div>
                    )
                }
                {
                    prop.data.sale_type==="For Sale"&&(
                     <div className="bg-success d-flex flex-column justify-content-center align-items-center p-3 rounded-bottom-5">
                            <h3>S</h3>
                            <h3>A</h3>
                            <h3>L</h3>
                            <h3>E</h3>
                        </div>
                    )
                }
            </div>
            <div className="ps-3 pb-3">
                <h5 className="py-2 fw-bold">Description</h5>
                <div className="accordion-body">{prop.data.desc.length>100?`${prop.data.desc.slice(0,100)}....`:prop.data.desc}</div>
                <h5 className="pt-3 fw-bold">Location</h5>
                <div className="accordion-body"><b>Address:</b> {prop.data.address} | <b>City:</b> {prop.data.city} | <b>State:</b> {prop.data.state} | <b>Zipcode</b> :{prop.data.zipcode}</div>
            </div>
            <div className="d-flex justify-content-end px-3">
                <h6 className="border-top border-bottom border-primary rounded-4 text-primary p-2">{diff===0?"Posted Today":`Posted ${diff} days ago`}</h6>
            </div>
            </NavLink>
            <NavLink to={auth.user?'/property':'/login'} state={prop.data} className="text-decoration-none btn-block btn btn-outline-success">Contact Details</NavLink>
        </div>
    )
}