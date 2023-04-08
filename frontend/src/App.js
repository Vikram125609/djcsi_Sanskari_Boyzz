import { useEffect } from "react";
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";
import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import SignUp from "./components/SignUp"
import Enroll from "./components/Enroll";
import ImageUpload from "./components/ImageUpload";
import "./App.css"

function App() {

  const requestPermission = async () => {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const token = await getToken(messaging, {
        vapidKey: "BOcK_mXF0Alh6rclU6KZFHkqTnUWGn_YrPMAyLIfC2KULgqJedUxD-_ZiYFNUd4LsB5P9poiJ2AOpEyMqLTJE50"
      })

      console.log(token)
      localStorage.setItem('FCM', token)
    }
  }

  useEffect(() => {
    console.log('Hii');
    requestPermission();
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/signup' element={< SignUp />}></Route>
        </Routes>

      <p className="text-3xl text font-sans">hello world!</p>
    </div>
    </Router>
  );
}

export default App;
