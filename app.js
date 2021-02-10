const express = require('express');
const socket = require('socket.io');

const app = express();

const server = app.listen(3000, ()=>{
    console.log('server is running at 3000');
})

// Static Files
app.use(express.static('public'));

//Socket Setup

const io = socket(server);
io.on('connection',(socket)=>{
    console.log('Socket connection established :)',socket.id);
    //handle chat event
    socket.on('chat', (data)=>{
        io.sockets.emit('chat',data);
    });
    socket.on('typing', (data)=>{
        socket.broadcast.emit('typing', data);
    });
})


