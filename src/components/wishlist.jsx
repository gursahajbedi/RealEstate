import { NavLink } from "react-router-dom";
import useAuthContext from "../context/useAuthContext";
import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import "./wishlist.css"


export default function Listing(prop){
    const {dispatch}=useContext(WishlistContext)
    const { auth } = useAuthContext();

    return(
        <div className="card m-3 border border-3" style={{"width":"40rem","height":"825px"}}>
            <img height="400px" style={{objectFit:"cover"}} src={prop.data.photo_main}></img>
            <div className="d-flex flex-row">
                <div className="p-3 flex-grow-1">
                    <div className="">
                      <h4>{prop.data.title}</h4>
                      {auth.user && 
                      (<div className="pb-3">
                        <button className="btn btn-light border p-0 text-danger d-flex align-items-center" onClick={()=>{dispatch({type:"REMOVE",payload:{id:prop.data.id}})}}><span className="material-icons fs-3">favorite</span>Remove from Wishlist</button>
                      </div>)}
                    </div>
                    <div className="mt-3">
                        <h5>{prop.data.city}, {prop.data.state}</h5>
                        <h6>{prop.data.sqft} sqft</h6>
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
            <NavLink to={auth.user?'/property':'/login'} onClick={()=>{prop.setwishactive(false)}} state={prop.data} className="text-decoration-none btn-block btn btn-outline-success">Contact Details</NavLink>
        </div>
    )
}