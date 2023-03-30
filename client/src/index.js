//dependency import
import React from "react";
import ReactDOM from "react-dom"
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk"

//global styles import
import './index.css'

//store creation
const store = createStore(compose(applyMiddleware(thunk)))

//app rendering
ReactDOM.render(<Provider store={store}></Provider>, document.getElementById('root'))