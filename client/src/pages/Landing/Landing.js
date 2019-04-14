import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import auth from "../../components/auth";
import { Landingdata } from "../Landing/Landingdata";
import "./Landing.css";

export const Landing = (props) => {
    return (
        <div className="wrapper">
            <h2>You Are Logged In</h2>
            <button
                onClick={() => {
                    auth.login(() => {
                        props.history.push("/landing/");
                    });
                }}
            >
                Login
            </button>
            <button
                onClick={() => {
                    auth.logout(() => {
                        props.history.push("/");
                    });
                }}
            >
                Logout
            </button>
            <br /><br />
            <div className="landingBody">
                <div className="landingChoice bg-dark">
                    <Link to={'/landing/makepost'}><Button className="homepageToggleButton">Create Transfer</Button></Link>
                    <Link to={'/landing/searchpost'}><Button className="homepageToggleButton">Search Transfers</Button></Link>
                </div>
                <Landingdata {...props} />
            </div>
        </div>
    )
}