import React from "react";
import auth from "../components/auth";
import Signup from "../components/Signup/SignupPage";

export const SignupPage = (props) => {
    return (
        <div className="wrapper">
        <button
                onClick={() => {
                    auth.login(() => {
                        props.history.push("/landing");
                    });
                }}
            >
                Login
            </button>
            <button
                onClick={() => {
                    auth.logout(() => {
                        props.history.push("/");
                    });
                }}
            >
                Logout
            </button>
            <Signup {...props}/>
        </div>
    );
};