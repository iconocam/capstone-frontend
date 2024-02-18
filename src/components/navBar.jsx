import React from "react";
import "./Navbar.css";
import SubNavLinks from "./SubNavLinks";

const Navbar = () => {
return (
    <div id="Navbar">
        <div id="INFJ">
    <p>INFJ</p>
    </div>
    <div className="sub">
        <SubNavLinks text="Home" to="/home" />
    </div>
    <div className="sub">
        <SubNavLinks text="You" to="/you" />
    </div>
    <div className="sub">
        <SubNavLinks text="Mind" to="/mind" />
    </div>
    <div className="sub">
        <SubNavLinks text="Us" to="/us" />
    </div>

    </div>
);
};

export default Navbar;
