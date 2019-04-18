import React, { Component } from "react";
import { Container } from "../Grid";
import API from "../../utils/API";
const moment = require("moment");

export default class Mybuys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeBuys: []
    };
    this.getActiveBuys = this.getActiveBuys.bind(this);
    this.convertPhone = this.convertPhone.bind(this);
  }

  componentDidMount() {
    const whoIS = this.props.location.state;
    this.getActiveBuys(whoIS);
  }

  convertPhone = (rawPhone) => {
    var insert = "-";
    var result = [rawPhone.slice(0, 3), insert, rawPhone.slice(3, 6), insert, rawPhone.slice(6, 10)].join('');
    return result;
  }

  getActiveBuys = (whoIS) => {
    API.getUserBuys(whoIS)
      .then(res => {
        if (res.data.status === "error") {
          console.log("No active buys for the user");
          throw new Error(res.data.message);
        }
        this.setState({ activeBuys: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container className="d-inline-block m-2 rounded">
        <span><h3 className="m-3 p-2 bg-dark text-light rounded">Incoming Transfers</h3></span>
        {this.state.activeBuys.length ? (
          <div className="list-group m-3">
            {this.state.activeBuys.map(res => (
              <span className="list-group-item list-group-item-action bg-dark" key={res._id}>
                <div className="d-block">
                  <h5 className="p-2 py-3 border border-primary text-light">{res.description}</h5>
                </div>
                <small className="d-block p-2 m-1 text-danger">Pick Up By:</small>
                <small className="alert-info d-block p-2 m-1">{moment(res.expiryDate).format('MMMM Do YYYY')}</small>
                <small className="d-block p-2 m-1 text-danger">Contact Seller:</small>
                <small className="alert-info d-block p-2 m-2">{this.convertPhone(res.contactNo)}</small>
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