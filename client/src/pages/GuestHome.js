//dependency import
import React from "react";
import {Link} from "react-router-dom";

//page
const GuestHome = () => {
    return <div>
        <h1>Welcome to myGroups!</h1>
        <p>MyGroups is a chat application that allows you to create groups and chat with your friends</p>
        <div>
            <Link to="/signup">Sign Up</Link> or <Link to="/login">Login</Link> to get started
        </div>
    </div>
}

export default GuestHome