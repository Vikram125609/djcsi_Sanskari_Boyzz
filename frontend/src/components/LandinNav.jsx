import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/navbar.css"
import logo from "../assets/logo.png"
import { useNavigate } from 'react-router-dom'

const LandingNav = () => {
    const navigate = useNavigate();
    const handleLogout = ()=>{
        sessionStorage.removeItem("HR-DATA");
        navigate("/");
    }

    return (
        <nav className="navbar">
            <div className="navbar-container navbar_container">
                <input type="checkbox" name="" id="" />
                <div className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
                <ul className="menu-items">
                    <Link to="/login">
                        <li>Login/Signup</li>
                    </Link>
                </ul>
                <h1 className="logo">
                    <a href="/"><img className="w-32 " src={logo}  /></a>
                </h1>
            </div>
        </nav>
    )
}

export default LandingNav
