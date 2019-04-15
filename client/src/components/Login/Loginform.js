import React from "react";
import Form from 'react-bootstrap/Form';
import "./Login.css";

export const Loginform = (props) => {
  return (
    <div className="signupSpacer bg-dark">
    <Form>
      <div className="signupform-input bg-dark">
        <input
          onChange={props.handleInputChange}
          value={props.email}
          name="email"
          type="text"
          className="form-control bg-light"
          placeholder="@Email"
          id="email"
        />
        <input
          onChange={props.handleInputChange}
          value={props.password}
          name="password"
          type="password"
          className="form-control bg-light"
          placeholder="Password"
          id="password"
        />
        <button onClick={props.handleLoginFormSubmit} className="submitButton m-3">
          Login
        </button>
      </div>
    </Form>
    </div>
  );
}