//used to protect the dashboard page so that not everyone can access it. Only logged-in users can access dashboard

import type { JSX } from "react"
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({child}:{child:JSX.Element}) =>{      //children is the React element you want to protect (e.g., <Dashboard />). The type annotation JSX.Element is TypeScript telling us that children must be a valid React element.
    const isAuth = false;       //initially it is false so it will not direct user to dashboard
    return(
        isAuth ? child : <Navigate to="/Login" />
    )
}
export default ProtectedRoute