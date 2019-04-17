import React from "react";
import Signup from "../components/Signup/SignupPage";


export const SignupPage = (props) => {
    return (
        <div className="wrapper">
            <Signup {...props} />
        </div>
    );
};