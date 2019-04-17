import React from "react";
import { Switch, Route } from "react-router-dom";
import { Landingdata } from "./Landingdata";
import Makepost from "../../pages/Landing/Makepost/Makepost";
import Searchpost from "../../pages/Landing/Searchpost/Searchpost";

export const LandingRoutes = (props) => {
    return (<Switch>
        <Route exact path="/landing" {...props} component={Landingdata} />
        <Route exact path="/landing/makepost" {...props} component={Makepost} />
        <Route exact path="/landing/searchpost" {...props} component={Searchpost} />
    </Switch>)
}