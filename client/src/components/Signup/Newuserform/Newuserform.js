import React from "react";
import Form from 'react-bootstrap/Form';
import SubwayList from "../../SubwayList/SubwayList";
import "./Newuserform.css";

function Newuserform(props) {
  return (
    <div className="signupSpacer bg-dark">
      <Form>
        <div className="signupform-input bg-dark">
          <input
            onChange={props.handleInputChange}
            value={props.firstname}
            name="firstname"
            type="text"
            className="form-control bg-light"
            placeholder="First Name"
            id="firstname"
          />
          <input
            onChange={props.handleInputChange}
            value={props.lastname}
            name="lastname"
            type="text"
            className="form-control bg-light"
            placeholder="Last Name"
            id="lastname"
          />
          <input
            onChange={props.handleInputChange}
            value={props.password}
            name="password"
            type="text"
            className="form-control bg-light"
            placeholder="Password"
            id="password"
          />
          <input
            onChange={props.handleInputChange}
            value={props.confirmpassword}
            name="confirmpassword"
            type="text"
            className="form-control bg-light"
            placeholder="Confirm Password"
            id="confirmpassword"
          />
          <input
            onChange={props.handleInputChange}
            value={props.email}
            name="email"
            type="text"
            className="form-control bg-light"
            placeholder="@Email"
            id="email"
          />
          <Form.Control as="select"
            onChange={props.handleInputChange}
            value={props.location}
            name="location"
            type="text"
            className="form-control bg-light"
            id="location">
            <option defaultValue="Select">Nearest Subway</option>
            {SubwayList.map(res => (<option key={res} value={res}>{res}</option>))}
          </Form.Control>
          <button onClick={props.handleNewUserFormSubmit} className="submitButton">
            Register
        </button>
        </div>
      </Form>
    </div>
  );
}

export default Newuserform;