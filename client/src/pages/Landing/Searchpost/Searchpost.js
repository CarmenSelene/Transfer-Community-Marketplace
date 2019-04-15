import React, { Component } from "react";
import Searchresults from "../../../components/Seachresults/Searchresults";
import SubwayList from "../../../components/SubwayList/SubwayList";
import CategoryList from "../../../components/CategoryList/CategoryList";
import auth from "../../../components/auth";
import API from "../../../utils/API";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Searchpost.css";

export default class Searchpost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "",
            location: "",
            currentUser: "",
            results: [],
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSearchPostsFormSubmit = this.handleSearchPostsFormSubmit.bind(this);
        this.getResults = this.getResults.bind(this);
    }

    handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    };

    handleSearchPostsFormSubmit = (e) => {
        e.preventDefault();
        const category = this.state.category;
        const location = this.state.location;
        const User = this.state.currentUser;
        const UserId = User;
        this.getResults(category, location, UserId);
    };

    getResults = (category, location, UserId) => {
        let getPost = {
            category: category,
            location: location,
            User: UserId

        }
        API.getPosts(getPost)
            .then(res => this.setState({ results: res.data }))
            .catch(err => console.log(err));
    };

    buyItem = (id) => {
        let user = this.state.currentUser;
        const buyerUpdate = {
            postId: id,
            buyerId: user
        }
        API.buyPost(buyerUpdate)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="wrapper">
                <div class="d-flex bg-dark text-light">
                    <div class="p-2">
                        <Button className="landingToggleButton text-light" onClick={() => {
                            auth.login(() => {
                                this.props.history.push("/landing/makePost");
                            });
                        }}
                        >
                            Go To Make Post</Button>
                    </div>
                    <div class="m-auto p-2">
                        <Form className="searchInputForm ">
                            <div className="formItem">
                                <Form.Control as="select"
                                    onChange={this.handleInputChange}
                                    value={this.category}
                                    name="category"
                                    type="text"
                                    className="form-control d-inline"
                                    id="category">
                                    <option defaultValue="Category">Category</option>
                                    {CategoryList.map(res => (<option key={res} value={res}>{res}</option>))}
                                </Form.Control>
                            </div>
                            <div className="formItem">
                                <Form.Control as="select"
                                    onChange={this.handleInputChange}
                                    value={this.location}
                                    name="location"
                                    type="text"
                                    className="form-control d-inline"
                                    id="location">
                                    <option defaultValue="Nearest Subway">Nearest Subway</option>
                                    {SubwayList.map(res => (<option key={res} value={res}>{res}</option>))}
                                </Form.Control>
                            </div>
                            <div className="formItem">
                                <Button variant="primary" className="d-inline searchSubmit"
                                    onClick={this.handleSearchPostsFormSubmit} >
                                    Submit Search
                            </Button>
                            </div>
                        </Form>
                    </div>
                    <div class="p-2">
                        <Button className="homepageToggleButton text-light" onClick={() => {
                            auth.logout(() => {
                                this.props.history.push("/");
                            });
                        }}
                        >
                            Logout</Button>
                    </div>
                </div>
                <Searchresults results={this.state.results} buyItem={this.buyItem} />
            </div>
        );
    }
}

