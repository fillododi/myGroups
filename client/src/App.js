//dependency import
import React, {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {io} from "socket.io-client";

//components import
import Home from './pages/Home.js'
import GuestHome from './pages/GuestHome.js'
//import ChatRoom from './pages/ChatRoom.js'
//import NotFound from './pages/NotFound.js'
import Signup from "./pages/Signup.js";

//socket creation
const socket = io('http://localhost:5000')

//App
const App = () => {
    const [authenticated, setAuthenticated] = useState(false) //todo add authentication

    return <BrowserRouter>
        <Routes>
            <Route exact path="/" element={authenticated? <Home/>: <GuestHome/>}/>
            <Route exact path="/signup" element={authenticated? <Home/>: <Signup/>}/>
        </Routes>
    </BrowserRouter>

}

export default App