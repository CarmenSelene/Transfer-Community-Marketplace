import React from "react";
import Login from "../components/Login/Login";
import auth from "../components/auth";

export const Home = (props) => {
    return (
        <div className="wrapper">
            <br /><br />
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
            <Login />
        </div>
    );
};