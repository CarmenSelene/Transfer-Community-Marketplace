import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { Loginform } from "./Loginform";
import auth from "../auth";
import "./Login.css";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            currentUser: ""
        };
        this.resetform = this.resetform.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLoginFormSubmit = this.handleLoginFormSubmit.bind(this);
    }

    handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    handleLoginFormSubmit = e => {
        e.preventDefault();
        if ((this.state.email !== "") && (this.state.password !== "")) {
            const checkUserName = this.state.email;
            const checkPassword = this.state.password;
            this.checkUserLogin(checkUserName, checkPassword);
            this.resetform();
        } else {
            alert("Please enter both email and password:");
        }
    }

    checkUserLogin = (username, password) => {
        const whichUser = {
            email: username,
            password: password
        }
        auth.login(whichUser);
    }

resetform = () => {
    this.setState({
        email: "",
        password: "",
        currentUser: ""
    });
}

render() {
    return (
        <div className="wrapper">
            <div className="landingBar bg-dark">
                <h3 className="text-light d-inline">Need To Register?</h3>
                <Link to={'/signup'}><Button className="homepageToggleButton text-light d-inline">Create Account</Button></Link>
            </div>
            <Loginform
                email={this.state.email}
                password={this.state.password}
                handleLoginFormSubmit={this.handleLoginFormSubmit}
                handleInputChange={this.handleInputChange}
            />
        </div>
    );
}
}

