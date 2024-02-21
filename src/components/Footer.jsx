import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css'
const Footer = () => {
    return (
    <div className="footer-container">
        <nav className="footer-nav">
        <Link to="/heropage">Home</Link>
        <Link to="/us">Us</Link>
        <Link to="/you">You</Link>
        <Link to="/mind">Mind</Link>
        
        </nav>
        <footer>
        <p>&copy; 2024 Your Website Name. All rights reserved.</p>
        </footer>
    </div>
    );
};

export default Footer;