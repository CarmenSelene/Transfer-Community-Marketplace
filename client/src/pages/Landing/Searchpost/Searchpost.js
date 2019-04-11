import React, { Component } from "react";
import auth from "../../components/auth";
import Searchresults from "../../components/Seachresults/Searchresults";
import SubwayList from "../../components/SubwayList/SubwayList";
import CategoryList from "../../components/CategoryList/CategoryList";
import API from "../../utils/API";
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

    componentDidMount() {
        const getUrl = window.location.href;
        const parseUrl = getUrl.split("/");
        const verifyUser = parseUrl[parseUrl.length - 1];
        if (verifyUser === "landing") {
            alert("please log in");
        } else
            this.setState({ currentUser: [verifyUser] });
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
                <span className="balancePageSwitch bg-dark text-light">
                    <button
                        onClick={() => {
                            auth.login(() => {
                                props.history.push("/makepost");
                            });
                        }}
                    >
                        MakePost
            </button>
                    <button
                        onClick={() => {
                            auth.login(() => {
                                props.history.push("/searchpost");
                            });
                        }}
                    >
                        SearchPost
            </button>
                    <Form className="searchInputForm">
                        <div className="formItem">
                            <Form.Control as="select"
                                onChange={this.handleInputChange}
                                value={this.category}
                                name="category"
                                type="text"
                                className="form-control d-inline-flex"
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
                </span>
                <Searchresults results={this.state.results} buyItem={this.buyItem} />
            </div>
        );
    }
}
