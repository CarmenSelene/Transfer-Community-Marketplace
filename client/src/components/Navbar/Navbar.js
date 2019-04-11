import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar App-navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to={'/'} className="nav-link menuLink"><strong className="mainSiteTitle">Transfer</strong></Link>
            <span className="navbar-text bg-dark p-3 ml-3 mt-2">Community Marketplace</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNav" aria-controls="mainNav"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="mainNav">
                        <Link to={'/contact'} className="nav-link menuLink">About Us</Link>
            </div>
        </nav>
    );
}

export default Navbar;