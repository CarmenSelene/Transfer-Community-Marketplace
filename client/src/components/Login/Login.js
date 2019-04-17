import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { Loginform } from "./Loginform";
import API from "../../utils/API";
import auth from "../auth";
import "./Login.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "@email",
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
        API.loginUser(whichUser)
            .then(res => {
                console.log(res.data);
                if (res.data === null) {
                    alert("Check your user credentials");
                    this.authenticated = false;
                    console.log("authenticated is  ", + this.authenticated);
                } else {
                    console.log("user Exists and login Successful");
                    this.authenticated = true;
                    console.log("authenticated is  ", + this.authenticated);
                    auth.login(() => {
                        this.props.history.push("/landing", res.data._id);
                    });
                }
            }).catch(err => console.log(err));
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
                <div className="d-flex bg-dark text-light">
                    <div className="p-2 m-auto">
                        <Link to={'/signup'}><Button className="homepageToggleButton">Create Account</Button></Link>
                    </div>
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

export default withRouter(Login);

