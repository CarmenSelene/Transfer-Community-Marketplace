import React from "react";
import auth from "./auth";

export const LandingPage = (props) => {
    return (
        <div className="wrapper">
            <h2>You Are Logged In</h2>
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
        </div>
    );
};