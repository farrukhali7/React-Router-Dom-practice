import { Link } from "react-router-dom"

const Navbar = () =>{
    return(
        <nav>
            <Link to="/" style={{margin:"40px", fontSize:"20px"}}>Home</Link>
            <Link to="/About" style={{margin:"40px", fontSize:"20px"}}>About</Link>
            <Link to="/Contact" style={{margin:"40px", fontSize:"20px"}}>Contact</Link>
            <Link to="/User" style={{margin:"40px", fontSize:"20px"}}>User</Link>
            <Link to="/Login" style={{margin:"40px", fontSize:"20px"}}>Login</Link>
        </nav>
    )
}
export default Navbar