const express = require('express')
const https = require('http')
const socketIo = require('socket.io')

const gamePlay = require('./routes')
const port = 3000 || process.env.PORT

const app = express()
const server = https.createServer(app)
const io = socketIo(server);

gamePlay(io)

server.listen(port, ()=> console.log(`Listening on port ${port}`))