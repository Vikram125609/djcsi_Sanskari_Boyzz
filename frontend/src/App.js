import { useEffect } from "react";
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";
function App() {

  const requestPermission = async () => {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const token = await getToken(messaging, {
        vapidKey: "BOcK_mXF0Alh6rclU6KZFHkqTnUWGn_YrPMAyLIfC2KULgqJedUxD-_ZiYFNUd4LsB5P9poiJ2AOpEyMqLTJE50"
      })
      localStorage.setItem('FCM', token)
    }
  }

  useEffect(() => {
    console.log('Hii');
    requestPermission();
  }, []);
  return (
    <div className="App">
      heello
      <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
    </div>
  );
}

export default App;
