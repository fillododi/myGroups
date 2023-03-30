//import dependencies
import http from "http";
import express from 'express'
import cors from 'cors'
import mongoose from "mongoose";
import dotenv from 'dotenv'
import {Server} from 'socket.io'

//import socket.io constants
import {CONNECT, JOIN, SEND, DISCONNECT} from "./constants/socket.js";

//import routes
import userRoutes from './routes/users.js'

//load env variables
dotenv.config()

//create app and server
const app = express()
const server = http.createServer(app)
const io = new Server(server)

//middleware
app.use(cors())
app.use(express.json())

//routes
app.use('/api/users', userRoutes)
    //TODO: add groups route

//connection to db
mongoose.connect(process.env.MONGODB_URI,
    {useNewUrlParser: true, useUnifiedTopology: true}
)
    .then(()=>console.log(('Database Connection Success!')))
    .catch((e)=>console.log(e))

//socket.io
io.on(CONNECT, (socket) => {
    console.log('New socket connection: ', socket.id)

    socket.on(JOIN, ({roomId, userId}) => {
        socket.join(roomId)
        console.log(`User ${userId} joined room ${roomId}`)
    })

    socket.on(SEND, ({roomId, userId, message}) => {
        io.to(roomId).emit('message', {userId, message})
        console.log(`User ${userId} sent: ${message}`)
    })

    socket.on(DISCONNECT, ()=>{
        console.log('Socket disconnected: ', socket.id)
    })
})

//server start
const PORT = process.env.PORT
server.listen(PORT, ()=>console.log('Server running on port ', PORT))