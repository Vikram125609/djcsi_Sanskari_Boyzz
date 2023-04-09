const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const { Server } = require('socket.io');

const io = new Server(server, {
    cors: {
        origin: '*'
    }
});

io.on('connection', (socket) => {
    console.log('Connected Successfully with', socket.id)

    socket.on('sendMessage', (data) => {
        socket.broadcast.emit('chat', data);
    })
    
    socket.on('disconnect', () => {
        console.log('Client Disconnected');
    })
});

module.exports = server;