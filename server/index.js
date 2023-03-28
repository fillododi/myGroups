//import dependencies
const http = require('http')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const socketio = require('socket.io')

//load env variables
dotenv.config()

//create app and server
const app = express()
const server = http.createServer(app)
const socket = socketio(server)

//middleware
app.use(cors())
app.use(express.json())

//connection to db
mongoose.connect(process.env.MONGODB_URI,
    {useNewUrlParser: true, useUnifiedTopology: true}
)
    .then(()=>console.log(('Database Connection Success!')))
    .catch((e)=>console.log(e))