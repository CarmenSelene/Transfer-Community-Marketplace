import React from "react";
import Buybutton from "../Buybutton";
import { Container } from "../Grid";
import "./Searchresults.css";
const moment = require("moment");

const convertPhone = (rawPhone) => {
  var insert = "-";
  var result = [rawPhone.slice(0, 3), insert, rawPhone.slice(3, 6), insert, rawPhone.slice(6, 10)].join('');
  return result;
}

const Searchresults = props => {
  return (
    <Container className="searchResultsBox d-inline-block m-2 rounded">
      <span><h3 className="m-3 p-2 bg-dark text-light rounded">Search Results</h3></span>
      {props.results.length ? (
        <div className="list-group m-3">
          {props.results.map(res => (
            <span className="list-group-item list-group-item-action bg-dark" key={res._id}>
              <div className="d-block">
                <h5 className="p-2 py-3 border border-primary text-light">{res.description}</h5>
              </div>
              <small className="d-block p-2 m-1 text-danger">Expires: {moment(res.expiryDate).format('MMMM Do YYYY')}</small>
              <small className="d-block p-2 m-1 text-danger">Contact Buyer: {convertPhone(res.contactNo)}</small>
              <small className="d-block p-2 m-1 text-danger">Price: $ {res.price}</small>
              <div className="d-block"><Buybutton buyItem={props.buyItem} r_id={res._id} /></div>
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

export default Searchresults;