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
import Report from "./components/Report";
import AllEmp from "./components/AllEmp";
import Home from "./components/Home";
import ProfileModal from "./components/ProfileModal";
import Admin from "./components/Admin";
import UnverifiedUserProfile from "./components/UnverifiedUserProfile";
import AllUnverified from "./components/AllUnverified";

function App() {

  const requestPermission = async () => {
    console.log("====<")
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
          <Route exact path='/report' element={< Report />}></Route>
          <Route exact path='/enroll' element={< Enroll />}></Route>
          <Route exact path='/home' element={< Home />}></Route>
          <Route exact path='/explore/profile' element={< ProfileModal />}></Route>
          <Route exact path='/explore/all-employees' element={< AllEmp />}></Route>
          <Route exact path='/admin' element={< Admin />}></Route>
          <Route exact path='/admin/profile' element={< UnverifiedUserProfile />}></Route>
          <Route exact path='/admin/all-unverified' element={< AllUnverified />}></Route>



        </Routes>
    </div>
    </Router>
  );
}

export default App;
