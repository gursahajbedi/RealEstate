import {useLocation} from "react-router-dom"
import Realtor from "./realtor"



function FeatureCard(prop){

    return(
        <div className="mx-4 my-3 p-4 card d-flex flex-column justify-content-between align-items-center btn btn-outline-success border border-3 border-success" style={{width:"200px"}}>
            <div className="card-title h6">
                {prop.head}
            </div>
            <div className="card-subtitle h5 mt-2">
                {prop.value}
            </div>
        </div>
    )
}

export default function Property(){
    const loc=useLocation()
    const {state}=loc

    return(
        <div>
            <div>
                <div className="mt-3 border-top border-start border-end border-3 pt-3 bg-light container d-flex flex-column align-items-center carousel slide carousel-fade" style={{'maxWidth':'75rem'}} id="carouselExample">
                  <div className="carousel-inner">
                    {state.photo_main &&(<div className="carousel-item active">
                    <img style={{'width':'100%','height':'500px','objectFit':"cover"}} src={state.photo_main}></img>
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
                    {state.photo_11 &&(<div className="carousel-item active">
                    <img style={{'width':'100%','height':'500px','objectFit':"cover"}} src={state.photo_11}></img>
                    </div>)}
                    {state.photo_12 &&(<div className="carousel-item active">
                    <img style={{'width':'100%','height':'500px','objectFit':"cover"}} src={state.photo_12}></img>
                    </div>)}
                    {state.photo_13 &&(<div className="carousel-item active">
                    <img style={{'width':'100%','height':'500px','objectFit':"cover"}} src={state.photo_13}></img>
                    </div>)}
                    {state.photo_14 &&(<div className="carousel-item active">
                    <img style={{'width':'100%','height':'500px','objectFit':"cover"}} src={state.photo_14}></img>
                    </div>)}
                    {state.photo_15 &&(<div className="carousel-item active">
                    <img style={{'width':'100%','height':'500px','objectFit':"cover"}} src={state.photo_15}></img>
                    </div>)}
                    {state.photo_16 &&(<div className="carousel-item active">
                    <img style={{'width':'100%','height':'500px','objectFit':"cover"}} src={state.photo_16}></img>
                    </div>)}
                    {state.photo_17 &&(<div className="carousel-item active">
                    <img style={{'width':'100%','height':'500px','objectFit':"cover"}} src={state.photo_17}></img>
                    </div>)}
                    {state.photo_18 &&(<div className="carousel-item active">
                    <img style={{'width':'100%','height':'500px','objectFit':"cover"}} src={state.photo_18}></img>
                    </div>)}
                    {state.photo_19 &&(<div className="carousel-item active">
                    <img style={{'width':'100%','height':'500px','objectFit':"cover"}} src={state.photo_19}></img>
                    </div>)}
                    {state.photo_20 &&(<div className="carousel-item active">
                    <img style={{'width':'100%','height':'500px','objectFit':"cover"}} src={state.photo_20}></img>
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
            <div className="container bg-light px-5 border-3 border-bottom border-start border-end" style={{"maxWidth":'75rem'}}>
                <div className="d-flex flex-row border-bottom border-2 border-secondary">
                    <div className="flex-grow-1 d-flex flex-row align-items-end mt-5"><h1 className="h2 fw-bold">{state.title}<span className="h2 fw-normal text-secondary ps-4"><span className="material-symbols-outlined">
                            location_on
                        </span> {state.city}, {state.state}</span></h1></div>
                    <h1 className="d-flex flex-column justify-content-end h2 fw-bold pe-5">₹{state.price}/-</h1>
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
                                <h4>S</h4>
                                <h4>A</h4>
                                <h4>L</h4>
                                <h4>E</h4>
                            </div>
                        )
                    }
                </div>
                <div className="mt-3">
                    <div className="mt-3">
                        {state.desc}
                    </div>
                    <div>
                        <div className="pb-3 fw-bold h2 mt-5 border-bottom border-2 border-dark fw-normal">
                            Features
                        </div>
                        <div className="d-flex flex-row flex-wrap justify-content-center">
                            <FeatureCard head={"Bathrooms"} value={state.bathrooms}/>
                            <FeatureCard head={"Bedrooms"} value={state.bedrooms}/>
                            <FeatureCard head={"Type"} value={state.home_type}/>
                            <FeatureCard head={"Open House"} value={state.open_house?"Yes":"No"}/>
                            <FeatureCard head={"Available"} value={state.sale_type}/>
                            <FeatureCard head={"Space"} value={state.sqft+" sqft"}/>
                            <FeatureCard head={"Property Age"} value={state.property_age}/>
                            <FeatureCard head={"Furniture Type"} value={state.furniture_type}/>
                        </div>
                    </div>
                    <div>
                        <div className="pb-3 h2 fw-bold mt-3 border-bottom border-2 border-dark fw-normal">
                            Realtor
                        </div>
                        <div className="pb-5">
                            <Realtor realtor={state['Realtor']}/>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}