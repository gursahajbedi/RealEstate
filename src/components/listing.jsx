import { NavLink } from "react-router-dom";
import useAuthContext from "../context/useAuthContext";
import { useContext, useEffect, useState } from "react";
import { WishlistContext } from "../context/WishlistContext";


export default function Listing(prop){
    const { state,dispatch }=useContext(WishlistContext)
    const { value } = useAuthContext();
    const [wish,setwish]=useState()

    const findWish=()=>{
            const xy=state.wishlist.filter((item)=>{
                if (item.id===prop.data.id){
                    return item
                }
            })
            console.log("idfound",xy)
            if(xy.length!=0){
                setwish(true)
            }
            else{
                setwish(false)
            }
    }

    useEffect(()=>{
        console.log(state)
        findWish()
    },[state,findWish])

    return(
        <div className="card m-3 border border-3" style={{"maxWidth":"50rem"}}>
            <img height="500px" style={{objectFit:"cover"}} src={prop.data.photo_main}></img>
            <div className="d-flex flex-row">
                <div className="flex-grow-1 p-3">
                    <div className="d-flex flex-wrap">
                      <h4>{prop.data.title}</h4>
                      {value.user && (<div className="ps-3">
                        {!wish && (<button className="btn btn-light border p-0 text-danger d-flex align-items-center" onClick={()=>{dispatch({type:"ADD",payload:prop.data})}}><span className="material-icons fs-3">favorite_border</span>Add to Wishlist</button>)}
                        {wish && (<button className="btn btn-light border p-0 text-danger d-flex align-items-center" onClick={()=>{dispatch({type:"REMOVE",payload:{id:prop.data.id}})}}><span className="material-icons fs-3">favorite</span>Remove from Wishlist</button>)}
                      </div>)}
                    </div>
                    <h5>{prop.data.city}, {prop.data.state}</h5>
                    <h6>{prop.data.sqft} sqft</h6>
                    <div className="d-flex gap-3 mt-4">
                        <span className="btn btn-outline-success text-dark fw-bold ">Bathrooms: {prop.data.bathrooms}</span>
                        <span className="btn btn-outline-success text-dark fw-bold ">Bedrooms: {prop.data.bedrooms}</span>
                        <span className="btn btn-outline-success text-dark fw-bold ">{prop.data.home_type}</span>
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
                <div className="accordion-body">{prop.data.desc.slice(0,100)}....</div>
                <h5 className="pt-3 fw-bold">Location</h5>
                <div className="accordion-body"><b>Address:</b> {prop.data.address} | <b>City:</b> {prop.data.city} | <b>State:</b> {prop.data.state} | <b>Zipcode</b> :{prop.data.zipcode}</div>
            </div>
            <NavLink to={value.user?'/property':'/login'} state={prop.data} className="text-decoration-none btn-block btn btn-outline-success">Contact Details</NavLink>
        </div>
    )
}