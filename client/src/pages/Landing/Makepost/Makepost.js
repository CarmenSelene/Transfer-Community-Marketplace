import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import auth from "../../../components/auth";
import SubwayList from "../../../components/SubwayList/SubwayList";
import CategoryList from "../../../components/CategoryList/CategoryList";
import Datepicker from "../../../components/Datepicker/Datepicker";
import API from "../../../utils/API";
import "./Makepost.css";
// const moment = require("moment");

export default class Makepost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: "",
            category: "",
            location: "",
            description: "",
            contactNo: "",
            price: "",
            expiryDate: "",
            currentUser: "",
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleNewPostsFormSubmit = this.handleNewPostsFormSubmit.bind(this);
    }

    handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    };

    handleNewPostsFormSubmit = (e) => {
        e.preventDefault();
        let newPost;
        let reqcategory = this.state.category;
        let reqlocation = this.state.location;
        let reqdescription = this.state.description;
        let reqcontactNo = this.state.contactNo;
        let reqprice = this.state.price;
        let reqexpiryDate = this.state.expiryDate;
        let requserId = this.state.currentUser;
        newPost = {
            category: reqcategory,
            location: reqlocation,
            description: reqdescription,
            contactNo: reqcontactNo,
            price: reqprice,
            expiryDate: reqexpiryDate,
            User: requserId
        }
        API.savePost(newPost).then(res => {
            if (res.status !== 200) {
                throw new Error(res.data.message);
            }
            console.log("Post Status: " + res.statusText);
            console.log(res);
        });
        alert("Post Successful");
        this.setState({
            category: "",
            location: "",
            description: "",
            contactNo: "",
            price: "",
            expiryDate: ""
        });
    };

    render() {
        return (
            <div className="wrapper">
                <div class="d-flex bg-dark text-light">
                    <div class="p-2">
                        <Button className="landingToggleButton text-light d-inline" onClick={() => {
                            auth.login(() => {
                                this.props.history.push("/landing/searchPost");
                            });
                        }}
                        >
                            Go To Search </Button>
                    </div>
                    <div class="ml-auto p-2">
                        <Button className="homepageToggleButton text-light d-inline" onClick={() => {
                            auth.logout(() => {
                                this.props.history.push("/");
                            });
                        }}
                        >
                            Logout</Button>
                    </div>
                </div>
                <div className="makePostPageBox m-2 mt-4 bg-dark">
                    <Form className="m-2 p-4 bg-dark text-light">
                        <h2 className="makePostTitle">Post New Item</h2>
                        <Form.Control as="select"
                            id="category"
                            className="bg-light my-2"
                            onChange={this.handleInputChange}
                            name="category"
                            type="text"
                            value={this.state.category}
                        >
                            <option defaultValue="">Category</option>
                            {CategoryList.map(res => (<option key={res} value={res}>{res}</option>))}
                        </Form.Control>
                        <Form.Control as="select"
                            onChange={this.handleInputChange}
                            value={this.location}
                            className="bg-light mt-3"
                            name="location"
                            type="text"
                            id="location">
                            <option defaultValue="">Transfer Station</option>
                            {SubwayList.map(res => (<option key={res} value={res}>{res}</option>))}
                        </Form.Control>
                        <Form.Control
                            id="contactNo"
                            type="text"
                            className="bg-light mt-3"
                            onChange={this.handleInputChange}
                            value={this.state.contactNo}
                            name="contactNo"
                            placeholder="Contact Number"
                        />
                        <Form.Control
                            type="number"
                            id="price"
                            className="bg-light mt-2"
                            onChange={this.handleInputChange}
                            value={this.state.price}
                            name="price"
                            placeholder="$ Price"
                        />
                        <Datepicker label="Expiry Date" 
                            id="expiryDate"
                            className="bg-light my-2"
                            onChange={this.handleInputChange}
                            value={this.state.expiryDate}
                            name="Expiry Date" />
                        {/* <Form.Control
                            type="date"
                            id="expiryDate"
                            className="bg-light my-2"
                            onChange={this.handleInputChange}
                            value={this.state.expiryDate}
                            name="Expiry Date"
                        /> */}
                        <Form.Control as="textarea" rows="5"
                            id="description"
                            className="bg-light my-2"
                            onChange={this.handleInputChange}
                            value={this.state.description}
                            name="description"
                            placeholder="Description ( shorter = better )"
                        />
                        <Button variant="danger"
                            className="submitNewPost"
                            onClick={this.handleNewPostsFormSubmit}
                        >Post Item</Button>
                    </Form>
                </div>
            </div>
        );
    }
}
