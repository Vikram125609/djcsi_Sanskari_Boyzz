import { socket } from "../socket";
import React, { useEffect } from "react";
const Chat = () => {
    const sendNotification = () => {
        const data = "Hello This is Vikram";
        socket.emit('sendMessage', data);
    };
    socket.on('sendMessage', (data) => { 
        console.log(data);
    })
    return (
        <>
            <h1>Hi This is Chat</h1>
            <button onClick={sendNotification}>Send Notification</button>
        </>
    );
}

export default Chat;