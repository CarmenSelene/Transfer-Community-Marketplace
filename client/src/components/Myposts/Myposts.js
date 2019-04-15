import React, { Component } from "react";
import { Container } from "../Grid";
import API from "../../utils/API";
import "../Mybuys/My.css";
const moment = require("moment");

export default class Myposts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePosts: []
    };
    this.getActivePosts = this.getActivePosts.bind(this);
    this.convertPhone = this.convertPhone.bind(this);
  }

  componentDidMount() {
    const whoIS = this.props.location.state;
    this.getActivePosts(whoIS);
  }

  convertPhone = (rawPhone) => {
    var insert = "-";
    var result = [rawPhone.slice(0, 3), insert, rawPhone.slice(3, 6), insert, rawPhone.slice(6, 10)].join('');
    return result;
  }

  getActivePosts = (whoIS) => {
    API.getUserPosts(whoIS)
      .then(res => {
        if (res.data.status === "error") {
          console.log("No active buys for the user");
          throw new Error(res.data.message);
        }
        this.setState({ activePosts: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container className="myBox m-2">
        <span><h3 className="m-2 p-2 bg-dark text-light">Outgoing Transfers</h3></span>
        {this.state.activePosts.length ? (
          <div className="list-group">
            {this.state.activePosts.map(res => (
              <span className="list-group-item list-group-item-action flex-column align-items-start my-2" key={res._id}>
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1 text-justify text-weight-bold">{res.description}</h5>
                </div>
                <small className="alert-primary p-2 m-2">Expires: {moment(res.expiryDate).format('MMMM Do YYYY')}</small>
                <br />
                <small className="alert-primary p-2 m-2">{this.convertPhone(res.contactNo)}</small>
              </span>
            ))}
          </div>
        ) : (
            <div className="wrapper">
              <h3 className="m-2 p-2 bg-dark text-light">No Results</h3>
            </div>
          )}
      </Container>
    );
  }
}
