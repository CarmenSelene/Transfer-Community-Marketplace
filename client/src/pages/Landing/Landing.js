import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import auth from "../../components/auth";
import { Landingdata } from "../Landing/Landingdata";
import "./Landing.css";

export const Landing = (props) => {
    return (
        <div className="wrapper">
            <div class="d-flex bg-dark text-light">
                <div class="p-2">
                    <Link to={'/landing/makepost'}><Button className="homepageToggleButton">Create Transfer</Button></Link>
                    <Link to={'/landing/searchpost'}><Button className="homepageToggleButton">Search Transfers</Button></Link>
                </div>
                <div class="ml-auto p-2">
                    <Button className="homepageToggleButton text-light d-inline" onClick={() => {
                        auth.logout(() => {
                            props.history.push("/");
                        });
                    }}
                    >
                        Logout</Button>
                </div>
            </div>
            <div className="landingBody">
                <Landingdata {...props} />
            </div>
        </div>
    )
}