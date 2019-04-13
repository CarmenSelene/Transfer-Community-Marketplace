import React, { Component } from "react";
import { Link } from "react-router-dom";
import Newuserform from "../../components/Signup/Newuserform/Newuserform";
import Button from 'react-bootstrap/Button';
import API from "../../utils/API";
import "./SignupPage.css";

export default class SignupPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            location: "",
            password: "",
            confirmpassword: "",
            userCheck: []
        };
        this.resetform = this.resetform.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleNewUserFormSubmit = this.handleNewUserFormSubmit.bind(this);
    }

    handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    handleNewUserFormSubmit = e => {
        if (this.state.password === this.state.confirmpassword) {
            const newUser = {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                password: this.state.password,
                email: this.state.email,
                location: this.state.location
            }
            e.preventDefault();
            this.setState({ userCheck: newUser });
            this.submitNewUser(newUser);
        } else {
            alert("passwords do not match");
            this.setState({ password: "", confirmpassword: "" });
        }
    }

    submitNewUser = (newuser) => {
        API.saveUser(newuser)
            .then(function (data) {
                console.log("newUser");
                console.log("res");
            })
            .catch(err => console.log(err));
        this.resetform();
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

    render() {
        return (
            <div className="wrapper">
                <div className="landingBar bg-dark">
                    <h3 className="text-light d-inline">Already A Member?</h3>
                    <Link to={'/'}><Button className="homepageToggleButton text-light d-inline">Go To Login</Button></Link>
                </div>
                <Newuserform
                    firstname={this.state.firstname}
                    lastname={this.state.lastname}
                    password={this.state.password}
                    email={this.state.email}
                    location={this.state.location}
                    confirmpassword={this.state.confirmpassword}
                    handleNewUserFormSubmit={this.handleNewUserFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
            </div>
        )
    }
}