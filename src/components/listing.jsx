import { NavLink } from "react-router-dom";
import useAuthContext from "../context/useAuthContext";

export default function Listing(prop){
    const { value } = useAuthContext();
    return(
        <div className="card m-3 border border-3" style={{"maxWidth":"50rem"}}>
            <img src={prop.data.photo_main}></img>
            <div className="d-flex flex-row">
                <div className="flex-grow-1 p-3">
                    <h2>{prop.data.title}</h2>
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
            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    <h5>Location</h5>
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body"><b>Address:</b> {prop.data.address} <br/><b>City:</b> {prop.data.city}<br/><b>State:</b> {prop.data.state} <br/> {prop.data.zipcode}</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    <h5>Description</h5>
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collaps" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">{prop.data.desc}</div>
                </div>
              </div>
            </div>
            <NavLink to={value.user?'/property':'/login'} state={prop.data} className="text-decoration-none btn-block btn btn-outline-success">Contact Details</NavLink>
        </div>
    )
}