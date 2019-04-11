import React from "react";
import { Link } from "react-router-dom";
import Mybuys from "../../components/Mybuys/Mybuys";
import Myposts from "../../components/Myposts/Myposts";
import Login from "../../pages/Login/Login";
import Button from 'react-bootstrap/Button';
import "./Landing.css";

function Landing(props) {
    if (props.currentuser !== "") {
        return (<div className="wrapper">
            <div className="App-body">
                <div className="landingBody">
                    <div className="landingChoice bg-dark">
                        <Link to={`/makepost/${props.currentuser}`}><Button className="homepageToggleButton">Create Transfer</Button></Link>
                        <Link to={`/searchpost/${props.currentuser}`}><Button className="homepageToggleButton">Search Transfers</Button></Link>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                            <Myposts activeposts={props.activeposts} />
                            </div>
                            <div className="col-sm">
                            <Mybuys activebuys={props.activebuys} />
                            </div>
                        </div>
                    </div>
                    <div className="landingInfo">
                    </div>
                </div>
            </div>
        </div>)
    } else {
        return <Login />;
    }
}

export default Landing;