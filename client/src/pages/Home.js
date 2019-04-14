import React from "react";
import Login from "../components/Login/Login";

export const Home = () => {
    return (
        <div className="wrapper">
            {/* <br /><br />
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
            </button> */}
            <Login />
        </div>
    );
};