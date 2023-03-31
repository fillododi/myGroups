import React, {useState} from "react";

//api import
import {signUp} from "../api/users.js";

const Signup = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault() //prevents the form from submitting normally
        if(!username || !email || !password){
            alert('Please fill in all the required fields')
            return
        }
        signUp({username, email, password}).then(()=>console.log(username, email, password)).catch((reason)=>console.log(reason))
    }

    return <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        </label>
        <label>
            Email:
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </label>
        <label>
            Password:
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </label>
        <button type="submit">Sign Up</button>
    </form>
}

export default Signup