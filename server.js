const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app)
const io = socketio(server)

// static folder
app.use(express.static(path.join(__dirname,'public')))

// run when connects
io.on('connection', socket => {
    console.log("New user connected...")

    socket.emit('message', 'Welcome to chatbox!')
})
const PORT = 8383 || process.env.PORT
server.listen(PORT, () => console.log(`Server Started at port ${PORT}`))