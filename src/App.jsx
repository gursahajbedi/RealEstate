import Login from "./components/login"
import Register from "./components/register"
import { BrowserRouter as Router, Route, Routes, Navigate, Link} from "react-router-dom"
import useAuthContext from "./context/useAuthContext"
import Home from "./components/home"
import useLogout from "./hooks/useLogout"
import Property from "./components/property"
import Contact from "./components/contact"
import Enroll from "./components/enroll"
import { useContext, useEffect, useState } from "react"
import "./App.css"
import { WishlistContext } from "./context/WishlistContext"
import Listing from "./components/wishlist"
import { FilterContext } from "./context/FilterContext"


function App() {
  const {state}=useContext(WishlistContext)
  const {auth}=useAuthContext()
  const {logout}=useLogout()
  const [active,setactive]=useState()
  const [wishactive,setwishactive]=useState() 
  const [wishdata,setwishdata]=useState()
  const {dispatch}=useContext(FilterContext)

  useEffect(()=>{
    const data=state.wishlist.map((item)=>{
      return (
        <div key={item.id} className="container-fluid p-0 d-flex justify-content-center">
          <Listing data={item} key={item.id} setwishactive={setwishactive}/>
        </div>
      )
    })
    setwishdata(data)
    
  },[state])

  const Submitlogout=()=>{
    dispatch({type:"",payload:""})
    logout()
  }
  return (
    <>
    <div>
      <Router>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/"><h1 className="display-3 fw-bold ms-2 mt-2">Real-Estate</h1></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="ms-3 navbar-nav  me-auto my-2 my-lg-0 gap-4">
                <li className="nav-item border-bottom border-4">
                  <Link className="nav-link active mt-3" aria-current="page" to="/"><h3>Listing</h3></Link>
                </li>
                {auth.user && (<li className="nav-item border-bottom border-4">
                  <Link className="nav-link active mt-3" to="/contact"><h3>Contact</h3></Link>
                </li>)}
                {auth.user && (<li className="nav-item border-bottom border-4">
                  <Link className="nav-link active mt-3" to="/enroll"><h3>Enroll</h3></Link>
                </li>)}
                {!auth.user && (<li className="nav-item border-bottom border-4">
                  <Link className="nav-link active mt-3" to="/login"><h3>Login</h3></Link>
                </li>)}
                {!auth.user && (<li className="nav-item border-bottom border-4">
                  <Link className="nav-link active mt-3" to="/register"><h3>Register</h3></Link>
                </li>)}
              </ul>
              {auth.user &&(
              <div className="d-flex justify-content-center">
                {!active?(<button className="btn btn-dark p-2 pb-1 mt-3 me-2" onClick={()=>{setactive(true)}}><span className="material-symbols-outlined" style={{"fontSize":"40px"}}>account_circle</span></button>):(<button className="btn btn-light p-2 pb-1 mt-3 me-2" onClick={()=>{setactive(false)}}><span className="material-symbols-outlined" style={{"fontSize":"40px"}}>cancel</span></button>)}
              </div>
              )}
            </div>
          </div>
        </nav>
        {auth.user&&(<div>
          {active &&(
          <div className="d-flex justify-content-end class me-2">
            <div className="border-top border-5 border-success bg-dark text-light rounded-bottom-5 d-flex flex-column justify-content-center align-items-center" id="div-menu">
                <span className="material-symbols-outlined mb-2" id='face-icon'>
                  face_6
                </span>
                <h1>Signed in As:</h1>
                <h3>{auth.user.email}</h3>
                <div className="h3 mt-3 w-100 text-center p-2 border-start border-end border-5" id="btn-hover" onClick={()=>{setwishactive(true)}}>
                  Wishlist
                </div>
                <div className="h3 mt-2 w-100 text-center p-2 border-start border-end border-5" id="btn-hover" onClick={Submitlogout}>
                  Profile
                </div>
                <div className="h3 mt-2 w-100 text-center p-2 border-start border-end border-5" id="btn-hover" onClick={Submitlogout}>
                  Logout
                </div>
            </div>
          </div>
          )}
        </div>)}
        {wishactive &&(
        <div className="d-flex justify-content-center align-items-center" id="overlay">
          <div className="border-top border-5 border-success bg-light d-flex flex-column justify-content-center align-items-center" id="wish-list">
              <div className="container d-flex justify-content-between align-items-start border-bottom border-5 border-dark bg-dark text-light">
                <h1 className="pt-3 ps-4 d-flex align-items-center">Wishlist<span className="material-icons fs-1 ps-1 text-danger">favorite</span></h1>                
                <button className="btn btn-outline-light text-danger border-0 mt-3 pb-0  px-2" onClick={()=>{setwishactive(false)}}><span className="material-symbols-outlined fs-1">cancel</span></button>
              </div>
              <div className="container-fluid p-0 d-flex" style={{overflow:"auto"}}>
                {wishdata}
              </div>
          </div>
        </div>
        )}
        <Routes>
          <Route path="/" element={<Home state={state}/>}/>
          <Route path="/login" element={!auth.user?<Login/>:<Navigate to="/"/>} />
          <Route path="/register" element={!auth.user?<Register/>:<Navigate to="/"/>}/>
          <Route path="/property" element={auth.user?<Property/>:<Navigate to="/login"/>}/>
          <Route path="/contact" element={auth.user?<Contact/>:<Navigate to="/login"/>}/>
          <Route path="/enroll" element={auth.user?<Enroll/>:<Navigate to="/login"/>}/>
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
