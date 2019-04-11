import React from "react";
import auth from "../components/auth";

export const Contact = (props) => {
    return (
        <div className="wrapper">
            <h2>Contact Us</h2>
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