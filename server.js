const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const gamePlay = require('./routes')
const rooms = require('./routes/rooms')
const port = process.env.PORT || 3000

const app = express()
const server = http.createServer(app)
const io = socketIo(server);

gamePlay(io)
rooms(io)

server.listen(port, ()=> console.log(`Listening on port ${port}`))