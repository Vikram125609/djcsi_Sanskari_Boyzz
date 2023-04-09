import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/navbar.css"
import logo from "../assets/logo.png"

const Navbar = () => {
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
                    <Link to="/home">
                        <li>Home</li>
                    </Link>
                    <Link to="/enroll">
                        <li>Enroll Employee</li>
                    </Link>
                    <Link to="/explore">
                        <li>Explore</li>
                    </Link>
                    <Link to="/report">
                    <li>Report</li>
                    </Link>

                    <Link to="/contact">
                    <li>Contact</li>
                    </Link>

                    <Link to="">
                    <li>Logout</li>
                    </Link>
                </ul>
                <h1 className="logo">
                    <a href="/"><img className="w-32 " src={logo}  /></a>
                </h1>
            </div>
        </nav>
    )
}

export default Navbar
