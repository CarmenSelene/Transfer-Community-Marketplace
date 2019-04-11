import React from "react";
import auth from "./auth";

export const Home = (props) => {
    return (
        <div className="wrapper">
            <h2>Landing Page</h2>
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