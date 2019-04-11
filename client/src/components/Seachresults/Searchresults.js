import React from "react";
import Buybutton from "../Buybutton";
import { Container } from "../Grid";
import { List, ListItem } from "../List";
import "./Searchresults.css";
const moment = require("moment");

const convertPhone = (rawPhone) => {
  var insert = "-";
  var result = [rawPhone.slice(0, 3), insert, rawPhone.slice(3, 6), insert, rawPhone.slice(6, 10)].join('');
  return result;
}

const Searchresults = props => {
  console.log(props);
  return (
    <span className="searchResultsBox">
      <Container fluid>
        <span className="searchTitleBox"><h2 className="m-2 p-2 bg-dark text-light">Search Results</h2></span>
        {props.results.length ? (
          <List className="resultsOuterBox">
            {props.results.map(res => (
              <ListItem key={res._id}>
                <List>
                  <li>
                    <strong className="postTitle">{res.description}</strong>
                  </li>
                  <li>
                    <strong>$ {res.price}</strong>
                  </li>
                  <li>
                    <strong>{convertPhone(res.contactNo)}</strong>
                  </li>
                  <li>
                    <strong>Expires: {moment(res.expiryDate).format('MMMM Do YYYY')}</strong>
                  </li>
                  <li>
                    <Buybutton buyItem={props.buyItem} r_id={res._id} />
                  </li>
                </List>
              </ListItem>
            ))}
          </List>
        ) : (
            <div className="wrapper">
              <h3 className="m-2 p-2 bg-dark text-light">No Results</h3>
            </div>
          )}
      </Container>
    </span>
  );
}

export default Searchresults;