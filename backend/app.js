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

const cors = require('cors');

const indexRoute = require('./routes/indexRoute');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions));

app.use('/', indexRoute);

module.exports = server;