import { useEffect } from "react";
import { socket } from "./socket";
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";
import Chat from "./Component/Chat";
function App() {

  const requestPermission = async () => {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const token = await getToken(messaging, {
        vapidKey: "BOcK_mXF0Alh6rclU6KZFHkqTnUWGn_YrPMAyLIfC2KULgqJedUxD-_ZiYFNUd4LsB5P9poiJ2AOpEyMqLTJE50"
      })
      console.log(token);
      localStorage.setItem('FCM', token)
    }
  }

  useEffect(() => {
    socket.connect();
  }, []);
  return (
    <div className="App">
      <Chat />
    </div>
  );
}

export default App;
