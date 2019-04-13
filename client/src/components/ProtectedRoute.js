import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../components/auth";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
return (
        <Route
            {...rest}
            render={props => {
                if (auth.isAthenticated()) {
                    return <Component {...props} />
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
            }}
        />
    );
};