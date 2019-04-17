import React from "react";
import { Switch, Route } from "react-router-dom";
import { Landingdata } from "./Landingdata";
import Makepost from "../../pages/Landing/Makepost/Makepost";
import Searchpost from "../../pages/Landing/Searchpost/Searchpost";

export const LandingRoutes = (props) => {
    console.log("props.location.state from Searchpost: " + props.location.params);
    return (<Switch>
        <Route exact path="/landing" {...props} component={Landingdata} />
        <Route path="/landing/makepost" {...props} component={Makepost} />
        <Route path="/landing/searchpost" {...props} component={Searchpost} />
    </Switch>)
}