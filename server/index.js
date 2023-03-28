//import dependencies
const http = require('http')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const socketio = require('socket.io')

//import socket.io constants
const {CONNECT, SEND, JOIN, DISCONNECT} = require('./constants/socket')

//load env variables
dotenv.config()

//create app and server
const app = express()
const server = http.createServer(app)
const io = socketio(server)

//middleware
app.use(cors())
app.use(express.json())

//connection to db
mongoose.connect(process.env.MONGODB_URI,
    {useNewUrlParser: true, useUnifiedTopology: true}
)
    .then(()=>console.log(('Database Connection Success!')))
    .catch((e)=>console.log(e))

//routes
app.use('/api/users', require('./routes/users'))
    //TODO: add groupes route

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