import React from 'react';
import "./Contact.css";

function Contact() {
    return (
        <div className="wrapper mt-5">
            <div className="App-body">
                <div className="bg-dark px-5 m-2 d-inline-block contactContainer">
                    <h1 className="p-4 text-light"><strong>Contact Us</strong></h1>
                    <div className="alert alert-light d-inline-block">
                        <h3 className="text-dark text-left"><strong>Disrupting the Garage-Sale</strong>
                            <br /><br />Connecting communities for the common good.</h3><br />
                        <ul className="text-dark text-left">
                            <li>Safe Public Transfers [Subway Stations]</li>
                            <li>Relevant Posts [By Location]</li>
                            <li>Promotes Community Engagement</li>
                            <li>Small Scale Trading + Retail</li>
                            <li>Offer (and ask) for Help</li>
                            <li>Save Money [Ask Before You Buy!]</li>
                            <li>Reduce Waste [Sell Your Leftovers!]</li>
                        </ul>
                    </div>
                    <div className="d-inline-flex m-2">
                        <h5 className="p-4 text-light">Yonge and Bloor Plaza<br />
                            Phone: 416 555 5555 <br />
                            www....Transfer.com</h5>
                        <img className="logomap" alt="Logo Map" src={require('./TTCmap.png')} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;

