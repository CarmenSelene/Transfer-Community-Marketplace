import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SubwayList from "../../../components/SubwayList/SubwayList";
import CategoryList from "../../../components/CategoryList/CategoryList";
import Datepicker from "../../../components/Datepicker/Datepicker";
import Dialog from "../../../components/Dialog/Dialog";
import API from "../../../utils/API";
import "./Makepost.css";
//import { ifError } from "assert";

const moment = require("moment");

export default class Makepost extends Component {
    constructor(props) {
        super(props);
        const initialDate = moment().format("YYYY MM DD").toString();
        const whoIS = this.props.history.location.state.userId;
        this.state = {
            userId: whoIS,
            category: "",
            location: "",
            description: "",
            contactNo: "",
            price: "",
            expiryDate: initialDate,
            currentUser: whoIS,
            isOpen: false,
            modalText: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDateInputChange = this.handleDateInputChange.bind(this);
        this.handleNewPostsFormSubmit = this.handleNewPostsFormSubmit.bind(this);
    }

    componentDidMount() {
        
        /*this.setState({
            userId: whoIS,
            category: "",
            location: "",
            description: "",
            contactNo: "",
            price: "",
            expiryDate: initialDate,
            currentUser: whoIS,
            isOpen: false,
            modalText: ""
         });
        //this.setState(initialState);*/
        console.log("UserId from ComponenetDidMount from MakePost: ", this.state.currentUser);
    }

    handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    };

    handleDateInputChange = e => {
        let value = e.target.value;
        value.pop();
        this.setState({
            "expiryDate": value
        });
        console.log(this.state.expiryDate);
    };

    handleNewPostsFormSubmit = (e) => {
        e.preventDefault();
        console.log("on click currentUser " + this.state.currentUser);
        console.log("on click userID " + this.state.userId);
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
        console.log("newPost");
        API.savePost(newPost).then(res => {
            console.log(res.status);
            if (res.status !== 200) {
                // throw new Error(res.data.message);
                this.setState({
                    isOpen: true,
                    modalText: res.data.message
                });
                console.log(this.state.isOpen);
                console.log(this.state.modalText);
            }
            this.setState({
                category: "",
                location: "",
                description: "",
                contactNo: "",
                price: "",
                expiryDate: "",
                isOpen: true,
                modalText: "Transfer Submitted Successfully"
            });
        });
    };

    render() {
        return (
            <div className="wrapper">
                <div className="makePostPageBox m-2 mt-4 bg-dark">
                    <Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>
                        {this.state.modalText}
                    </Dialog>
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
                           /* onChange={this.handleDateChange} 
                             value={this.state.expiryDate} 
                            name="expiryDate"*/ />
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
