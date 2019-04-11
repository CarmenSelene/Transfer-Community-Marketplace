import React from "react";
import auth from "../components/auth";
import Signup from "./Signup/SignupPage";

export const SignupPage = (props) => {
    return (
        <div className="wrapper">
            <h2>Signup</h2>
            <button
                onClick={() => {
                    auth.logout(() => {
                        props.history.push("/");
                    });
                }}
            >
                Logout
            </button>
            <Signup />
        </div>
    );
};