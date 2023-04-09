const socketServer = require('./app');
const dotenv = require('dotenv').config({ path: "./config.env" })

process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.log(err.name, err.message);
});

const port = 3002 || process.env.PORT;
socketServer.listen(port, () => {
    console.log(`Server is running at ${port}`)
})
