import { useParams } from "react-router-dom";

const User = () => {
    const {id} = useParams()  //useParams() returns an object containing all the dynamic parameters from the URL.and that's why id is contained in curly braces            //this means that id will come from the URL, suppose  localhost:5173/users/10 this means id = 10
    return (
        <>
            <h1>This is Users page</h1>
            <h1>UserID : {id}</h1>
        </>
    )
}
export default User;