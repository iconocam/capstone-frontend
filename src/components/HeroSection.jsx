import React from "react"
import "./HeroSection.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import Community from "./Community";
function HeroSection() {
// const [username, setUsername]= useState('')

// Username Input
// const handleInputChange = (e) => {
//     setUsername(e.target.value)
// }
    return (
        <div className="hero-container">
        <video src="/video-2.mp4" autoPlay loop muted />
        
        <h1>The Forever Journey</h1>
        <p>This is not a trial run, your journey began the moment you opened your eyes.</p>
        <div>
        <Link to ="/mind">
        <button id="Entrance" to={{pathname: "/home"}}>Enter</button>
        </Link>
        </div>
        <Community />
        </div>
        
    )
}

export default HeroSection;