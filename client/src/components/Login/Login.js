import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import {Loginform} from "./Loginform";
import API from "../../utils/API";
import "./Login.css";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            currentUser: "",
            activePost: [],
            activeBuys: []
        };
        this.resetform = this.resetform.bind(this);
        this.getActivePosts = this.getActivePosts.bind(this);
        this.getActiveBuys = this.getActiveBuys.bind(this);
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
        let usercheck = {
            email: username,
            password: password
        }
        API.loginUser(usercheck)
            .then(res => {
                if (res.data.status === "error") {
                    alert("Check your user credentials");
                    this.setState({ auth: false });
                    throw new Error(res.data.message);
                }
                console.log("user Exists and login Successful");
                this.setState({ currentUser: res.data._id })

            })
            .then(() => {
                let currUser = this.state.currentUser;
                console.log("Current user is " + currUser);
                this.getActivePosts(currUser);

            })
            .catch(err => console.log(err));
    }

    getActivePosts = (currUser) => {
        API.getUserPosts(currUser)
            .then(res => {
                if (res.data.status === "error") {
                    alert("No active posts for the user");
                    throw new Error(res.data.message);
                }
                this.setState({ activePost: res.data });
                this.getActiveBuys(currUser);
            })
            .catch(err => console.log(err));
    }

    getActiveBuys = (currUser) => {
        API.getUserBuys(currUser)
            .then(res => {
                if (res.data.status === "error") {
                    alert("No active buys for the user");
                    throw new Error(res.data.message);
                }
                this.setState({ activeBuys: res.data });
            })
            .catch(err => console.log(err));
    }

    resetform = () => {
        this.setState({
            firstname: "",
            lastname: "",
            email: "",
            location: "",
            password: "",
            confirmpassword: "",
            userCheck: {}
        });
    }

    renderPage = () => {
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
    };

    render() {
        return this.renderPage();
    }
}

