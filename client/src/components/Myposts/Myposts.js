import React from "react";
import { Container } from "../Grid";
import "../Mybuys/My.css";
const moment = require("moment");

const convertPhone = (rawPhone) => {
  var insert = "-";
  var result = [rawPhone.slice(0, 3), insert, rawPhone.slice(3, 6), insert, rawPhone.slice(6, 10)].join('');
  return result;
}

export const Myposts = (props) => {
  return (
    <Container className="myBox m-2">
      <span><h3 className="m-2 p-2 bg-dark text-light">Outgoing Transfers</h3></span>
      {props.activeposts.length ? (
        <div className="list-group">
          {props.activeposts.map(res => (
            <span className="list-group-item list-group-item-action flex-column align-items-start my-2" key={res._id}>
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1 text-justify text-weight-bold">{res.description}</h5>
              </div>
              <small className="alert-primary p-2 m-2">Expires: {moment(res.expiryDate).format('MMMM Do YYYY')}</small>
              <br />
              <small className="alert-primary p-2 m-2">{convertPhone(res.contactNo)}</small>
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
