import {useLocation} from "react-router-dom"
import Realtor from "./realtor"

function FeatureCard(prop){

    return(
        <div className="m-5 p-5 card d-flex flex-column align-items-center btn btn-outline-success border border-3 border-success">
            <div className="card-title h3">
                {prop.head}
            </div>
            <div className="card-subtitle h2 mt-2">
                {prop.value}
            </div>
        </div>
    )
}

export default function Property(){
    const loc=useLocation()
    const {state}=loc
    console.log("Property",state)

    return(
        <div>
            <div className="bg-dark">
                <div className="py-3 container-fluid d-flex flex-column align-items-center carousel slide carousel-fade" style={{'maxWidth':'100rem'}} id="carouselExample">
                  <div className="carousel-inner">
                    {state.photo_main &&(<div className="carousel-item active">
                    <img style={{'width':'100%','height':'500px','objectFit':"cover"}} src={`http://localhost:8000${state.photo_main}`}></img>
                    </div>)}
                    {state.photo_1 &&(<div className="carousel-item active">
                    <img style={{'width':'100%','height':'500px','objectFit':"cover"}} src={state.photo_1}></img>
                    </div>)}
                    {state.photo_2 &&(<div className="carousel-item active">
                    <img style={{'width':'100%','height':'500px','objectFit':"cover"}} src={state.photo_2}></img>
                    </div>)}
                    {state.photo_3 &&(<div className="carousel-item active">
                    <img style={{'width':'100%','height':'500px','objectFit':"cover"}} src={state.photo_3}></img>
                    </div>)}
                    {state.photo_4 &&(<div className="carousel-item active">
                    <img style={{'width':'100%','height':'500px','objectFit':"cover"}} src={state.photo_4}></img>
                    </div>)}
                    {state.photo_5 &&(<div className="carousel-item active">
                    <img style={{'width':'100%','height':'500px','objectFit':"cover"}} src={state.photo_5}></img>
                    </div>)}
                    {state.photo_6 &&(<div className="carousel-item active">
                    <img style={{'width':'100%','height':'500px','objectFit':"cover"}} src={state.photo_6}></img>
                    </div>)}
                    {state.photo_7 &&(<div className="carousel-item active">
                    <img style={{'width':'100%','height':'500px','objectFit':"cover"}} src={state.photo_7}></img>
                    </div>)}
                    {state.photo_8 &&(<div className="carousel-item active">
                    <img style={{'width':'100%','height':'500px','objectFit':"cover"}} src={state.photo_8}></img>
                    </div>)}
                    {state.photo_9 &&(<div className="carousel-item active">
                    <img style={{'width':'100%','height':'500px','objectFit':"cover"}} src={state.photo_9}></img>
                    </div>)}
                    {state.photo_10 &&(<div className="carousel-item active">
                    <img style={{'width':'100%','height':'500px','objectFit':"cover"}} src={state.photo_10}></img>
                    </div>)}
                    
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden ">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
            </div>
            <div className="container" style={{"maxWidth":'100rem'}}>
                <div className="d-flex flex-row border-bottom border-2 border-secondary">
                    <h1 className="flex-grow-1 d-flex flex-row align-items-end mt-5 display-1 fw-normal">{state.title}</h1>
                    <h1 className="d-flex flex-column justify-content-end display-2 fw-bold pe-5">₹{state.price}/-</h1>
                    {
                        state.sale_type==="For Rent"&&(
                            <div className="bg-danger d-flex flex-column justify-content-center align-items-center p-3 rounded-bottom-5">
                                <h3>R</h3>
                                <h3>E</h3>
                                <h3>N</h3>
                                <h3>T</h3>
                            </div>
                        )
                    }
                    {
                        state.sale_type==="For Sale"&&(
                         <div className="bg-success d-flex flex-column justify-content-center align-items-center p-3 rounded-bottom-5">
                                <h3>S</h3>
                                <h3>A</h3>
                                <h3>L</h3>
                                <h3>E</h3>
                            </div>
                        )
                    }
                </div>
                <div className="mt-3">
                    <div>
                        <span className="h3 fw-normal text-secondary mb-2 ms-3"><span className="material-symbols-outlined">
                            location_on
                        </span> {state.city}, {state.state}</span>
                    </div>
                    <div className="mt-3">
                        <h4>{state.desc}</h4>
                    </div>
                    <div>
                        <div className="pb-3 display-5 mt-5 border-bottom border-2 border-dark fw-normal">
                            Features
                        </div>
                        <div className="d-flex flex-row flex-wrap justify-content-center">
                            <FeatureCard head={"Bathrooms"} value={state.bathrooms}/>
                            <FeatureCard head={"Bedrooms"} value={state.bedrooms}/>
                            <FeatureCard head={"Type"} value={state.home_type}/>
                            <FeatureCard head={"Open House"} value={state.open_house?"Yes":"No"}/>
                            <FeatureCard head={"Available"} value={state.sale_type}/>
                            <FeatureCard head={"Space"} value={state.sqft+" sqft"}/>
                        </div>
                    </div>
                    <div>
                        <div className="pb-3 display-5 mt-5 border-bottom border-2 border-dark fw-normal">
                            Realtor
                        </div>
                        <div>
                            <Realtor realtor={state['Realtor']}/>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}