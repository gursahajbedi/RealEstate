import Login from "./components/login"
import Register from "./components/register"
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom"
import useAuthContext from "./context/useAuthContext"
import Home from "./components/home"
import useLogout from "./hooks/useLogout"
import Property from "./components/property"
import Contact from "./components/contact"
import Enroll from "./components/enroll"


function App() {
  const {value}=useAuthContext()
  const {logout}=useLogout()
  console.log(value)
  const Submitlogout=()=>{
    logout()
  }
  return (
    <>
    <div>
      
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/re/"><h1 className="display-3 fw-bold border-bottom border-4 pb-2 pt-2">RealEstate</h1></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="ms-3 navbar-nav  me-auto my-2 my-lg-0 gap-4">
            <li className="nav-item border-bottom border-4">
              <a className="nav-link active mt-3" aria-current="page" href="/re/"><h3>Listing</h3></a>
            </li>
            {value.user && (<li className="nav-item border-bottom border-4">
              <a className="nav-link active mt-3" href="/re/contact"><h3>Contact</h3></a>
            </li>)}
            {value.user && (<li className="nav-item border-bottom border-4">
              <a className="nav-link active mt-3" href="/re/enroll"><h3>Enroll</h3></a>
            </li>)}
            {!value.user && (<li className="nav-item border-bottom border-4">
              <a className="nav-link active mt-3" href="/re/login"><h3>Login</h3></a>
            </li>)}
            {!value.user && (<li className="nav-item border-bottom border-4">
              <a className="nav-link active mt-3" href="/re/register"><h3>Register</h3></a>
            </li>)}
          </ul>
          {value.user && (<form className="d-flex" role="search">
                <input className="form-control me-2"  type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-lg btn-outline-success" type="submit">Search</button>
          </form>)}
        </div>
      </div>
      {value.user &&(<button className="btn btn-lg btn-danger" onClick={Submitlogout}>Logout</button>)}
    </nav>

      <Router>
        <Routes>
          <Route path="/re/" element={<Home/>}/>
          <Route path="/re/login" element={!value.user?<Login/>:<Navigate to="/re/"/>} />
          <Route path="/re/register" element={!value.user?<Register/>:<Navigate to="/re/"/>}/>
          <Route path="/re/property" element={value.user?<Property/>:<Navigate to="/re/login"/>}/>
          <Route path="/re/contact" element={<Contact/>}/>
          <Route path="/re/enroll" element={<Enroll/>}/>
          
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
