// import { useState } from "react"

import React, { useState} from "react"

// const SimpleForm =() =>{
//   const [name , setName] = useState<string>("")
//   // {console.log(name)}    
//   return(
//     <div>
//     <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />      {/* value is bound to state → React controls what’s inside the input.*/}        {/*onChange updates state whenever the user types. */}             {/*This ensures UI and state are always in sync.*/}
//     {/* this above is called "Controlled Inputs" and it can be used in displaying the message password too short or weak or etc, making the submit button disabled temp  */}
//     <p>Name: {name}</p>
//     </div>
//   )
// }
// export default SimpleForm



//Multiple Inputs Login Form
// import React, { useState } from "react";

// interface loginForm {
//     email:string,
//     password:string
// }

// const Login = () => {
//     const [formData , setFormData] = useState<loginForm>({      //State in react is immutable: you dont change it directly , you always use setter for it(setFormData)
//         email: "",
//         password: ""
//     })
    
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{            //ChangeEvent triggers when the value of input changes
//         setFormData({
//             ...formData,        //spread operator is used so that both values "email and password" can be kept
//             [e.target.name] : e.target.value      //here square brackets are used because of "Computer Property Names" it make the property name dynamic — it changes depending on which input triggered the event.                //"name" tells us which field is being changed. "value" tells us what the new text is.
//         })
//     }

// //name attribute is critical when you’re using one generic handleChange function for multiple inputs

//     return(
//         <form>
//             <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} value={formData.email}/>
//             <input type="password" name="password" placeholder="Enter your Password" onChange={handleChange} value={formData.password} />
//             <button type="submit">Login</button>
//         </form>
//     )
// }
// export default Login



//Handle Form Submit: PREVENT PAGE RELOAD
import { FormEvent } from "react"

interface loginForm {
    email:string,
    password:string
};

const Login = () => {
    const [error , setError] = useState<string>("")
    const [formData , setFormData] = useState<loginForm>({
        email: "",
        password: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.email) {
            setError("Email is required");
            return;
        }
        if (!formData.password) {
            setError("Password is required");
            return;
        }
        setError("");       // to remove the error message if the user has fill all the required inputs
        console.log(formData);

        await new Promise((res) => setTimeout(res,1000));
        alert("Login successful!")
    }


    return(
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} />
            <button type="submit">Login</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
    )
}
export default Login
