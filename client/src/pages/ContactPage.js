import React from "react";
import auth from "../components/auth";
import Contact from "../pages/Contact/Contact";

export const ContactPage = (props) => {
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
            <Contact />
        </div>
    );
};