import React from 'react';
import { Link } from "react-router-dom";
import "../Navbar.css";

function homeLink() {
    return (
        <nav className="App-logo">
        <Link to={'/'} className="logo"><img className="logo" alt="homelink" src={require('./transfer_logo.jpg')} /></Link>
        </nav>
    );
}

export default homeLink;