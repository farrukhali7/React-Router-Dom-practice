import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()          //useNavigate is a React Router hook that lets you move the user to another page programmatically (without them clicking a <Link>).
    
    const handleLogic = () =>{
        navigate("/Dashboard")
    }
    return(
        <div>
            <h1>Login Page</h1>
            <button onClick={handleLogic}>Login</button>
        </div>
    )
}
export default Login


//              "DIFFERENCE BETWEEN LINK AND NAVIGATE"
//<Link> → Always go here when clicked. best for static navigation
// useNavigate → Go here when my logic says so. Used inside your component logic (functions, event handlers). 

{/* <Link> = “User chooses where to go.”
useNavigate = “App decides where to send the user.” */}