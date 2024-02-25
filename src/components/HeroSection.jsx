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
        <div id="bckg">
    <div className="hero-container">
        {/*ANIMATED BACKGROUND VIDEO */}
        {/* <video src="/video-2.mp4" autoPlay loop muted /> */}
        <div id="testDiv">
        <div style={{ display: 'inline-block', width: '50%', marginRight: '40px' }}>
            <section>
            The enigmatic nature of INFJs extends to their seemingly paradoxical qualities. Their deep-rooted idealism coexists with a pragmatic understanding of the world. This intricate balance between visionary thinking and grounded logic can leave others fascinated by the complexity of their thought processes.
            </section>
        </div>
        <div style={{ display: 'inline-block', width: '40%', }}>
            <ol>
            <p>About being an INFJ; a perplexing and enigmatic analyzation- intuition based structures enforce a nuanced approach to problem-solving guiding the navigation of complex situations.</p>
            {/* <li>Unorthodox</li>
            <li>Unusual</li>
            <li>Unreal</li> */}
            </ol>
        </div>
        <img src="https://i.etsystatic.com/40643086/r/il/4b3936/5507123093/il_fullxfull.5507123093_9wk6.jpg" />
        </div>
    </div>
      {/* Add your additional components like Community here */}
    <section id ="apple">
    A
    b
    c
    d
    e
    </section>
    </div>
);
}

export default HeroSection;