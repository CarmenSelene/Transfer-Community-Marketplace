import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Home } from "./components/Home";
import { SignupPage } from "./components/SignupPage";
import { Contact } from "./components/Contact";
import { LandingPage } from "./components/LandingPage";
// import { Makepost } from "./components/Makepost/Makepost";
// import { SearchPost } from "./components/Searchpost/Searchpost";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="App-header">
            <h2>Navbar</h2>
          </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/contact" component={Contact} />
          <ProtectedRoute exact path="/landing" component={LandingPage} />
          {/* <ProtectedRoute exact path="/makepost" component={Makepost} />
          <ProtectedRoute exact path="/searchpost" component={Searchpost} /> */}
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </div>
    );
  }
}

export default App;
