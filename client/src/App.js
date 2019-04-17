import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Navbar from "./components/Navbar/Navbar";
import { Home } from "./pages/Home";
import { SignupPage } from "./pages/SignupPage";
import { ContactPage } from "./pages/ContactPage";
import { Landing } from "./pages/Landing/Landing";
// import Makepost from "./pages/Landing/Makepost/Makepost";
// import Searchpost from "./pages/Landing/Searchpost/Searchpost";
import Footer from "./components/Footer/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="App-body">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/contact" component={ContactPage} />
            <ProtectedRoute path="/landing" component={Landing} />
            {/* <ProtectedRoute exact path="/landing/makepost" component={Makepost} />
            <ProtectedRoute exact path="/landing/searchpost" component={Searchpost} /> */}
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
