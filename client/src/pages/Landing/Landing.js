import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import auth from "../../components/auth";
import { LandingRoutes } from "../../pages/Landing/LandingRoutes";
import "./Landing.css";

export const Landing = (props) => {
    return (
        <div className="wrapper">
            <div className="d-flex bg-dark text-light">
                <div className="p-2">
                    <Link to={{
                        pathname: '/landing/makepost',
                        state: {
                            userId: props.history.location.state
                        }
                    }}><Button className="landingToggleButton">Create Transfer</Button></Link>
                    <Link to={'/landing/searchpost'}><Button className="landingToggleButton">Search Transfers</Button></Link>
                </div>
                <div className="ml-auto p-2">
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
                <LandingRoutes {...props} />
            </div>
        </div>
    )
}