import React from 'react';
import "./footer.css";

function Footer() {
    return (
        <nav className="navbar App-footer sticky-bottom navbar-dark p-3">
            <img className="nav-item footerSocial mx-3 p-0" alt="nav-item" src={require('./media/fabook.png')} />
            <img className="nav-item footerSocial mx-5 p-0" alt="nav-item" src={require('./media/instagram.png')} />
            <img className="nav-item footerSocial mx-3 p-0" alt="nav-item" src={require('./media/twit.png')} />
        </nav>
    );
}

export default Footer;