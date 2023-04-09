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
import SignIn from "./components/SignIn";
import Landing from "../src/components/Landing/Landing"
import LandingNav from "./components/LandinNav";

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
        <Routes>
          <Route exact path='/' element={<><LandingNav /> <Landing /></>}></Route>
        </Routes>
      
        <Routes>
          <Route exact path='/login' element={ <> <LandingNav />< SignIn /></>}></Route>
          <Route exact path='/signup' element={ <> <LandingNav />< SignUp /></>}></Route>
          <Route exact path='/explore' element={ <> <Navbar />< Explore /></>}></Route>
          <Route exact path='/report' element={<>  <Navbar />< Report /></>}></Route>
          <Route exact path='/enroll' element={ <> <Navbar />< Enroll /></>}></Route>
          <Route exact path='/home' element={<>  <Navbar />< Home /></>}></Route>
          <Route exact path='/explore/profile' element={ <> <Navbar />< ProfileModal /></>}></Route>
          <Route exact path='/explore/all-employees' element={ <> <Navbar />< AllEmp /></>}></Route>
          <Route exact path='/admin' element={ <> <Navbar />< Admin /></>}></Route>
          <Route exact path='/admin/profile' element={ <> <Navbar />< UnverifiedUserProfile /></>}></Route>
          <Route exact path='/admin/all-unverified' element={ <> <Navbar />< AllUnverified /></>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
