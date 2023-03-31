//dependency import
import React from "react";
import ReactDOMClient from "react-dom/client"

//components import
import App from './App.js'

//app rendering
const root = ReactDOMClient.createRoot(document.getElementById('root'))
root.render(<App/>)