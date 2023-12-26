import { Routes, Route, Link } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Projects from "./Projects.jsx"
import Contact from "./Contact"
const Header = () => {
  return (

    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        
      </nav>

      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/about' element={<About/>} ></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </>
  )
}
export default Header