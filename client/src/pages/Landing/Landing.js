import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
// import {Mybuys} from "../../components/Mybuys/Mybuys";
// import {Myposts} from "../../components/Myposts/Myposts";
import auth from "../../components/auth";
import "./Landing.css";

export const Landing = (props) => {
    return (
        <div className="wrapper">
            <h2>You Are Logged In</h2>
            <button
                onClick={() => {
                    auth.login(() => {
                        props.history.push("/landing");
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
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            {/* <Myposts activeposts={props.activeposts} /> */}
                        </div>
                        <div className="col-sm">
                            {/* <Mybuys activebuys={props.activebuys} /> */}
                        </div>
                    </div>
                </div>
                <div className="landingInfo">
                </div>
            </div>
        </div>)
}