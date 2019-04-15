import React, { Component } from "react";
import { Link } from "react-router-dom";
import Newuserform from "../../components/Signup/Newuserform/Newuserform";
import Button from 'react-bootstrap/Button';
import auth from "../../components/auth";
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
            formData: []
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
            this.setState({ formData: newUser });
            this.submitNewUser(newUser);
            auth.logout(() => {
                this.props.history.push("/");
            });
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
            formData: {}
        });
    }

    render() {
        return (
            <div className="wrapper">
                <div class="d-flex bg-dark text-light">
                    <div class="p-2 m-auto">
                        <Link to={'/'}><Button className="homepageToggleButton">Go To Login</Button></Link>
                    </div>
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