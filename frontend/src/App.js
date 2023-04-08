import { useEffect } from "react";
import React from 'react';
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
import "./App.css"
import Explore from "./components/Explore";
import Navbar from "./components/Navbar";
import AllEmp from "./components/AllEmp";

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
        <Navbar/>
        <Routes>
          <Route exact path='/signup' element={< SignUp />}></Route>
          <Route exact path='/explore' element={< Explore />}></Route>
          <Route exact path='/explore/all-employees' element={< AllEmp />}></Route>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
