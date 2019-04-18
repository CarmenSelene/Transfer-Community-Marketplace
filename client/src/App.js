import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Navbar from "./components/Navbar/Navbar";
import { Home } from "./pages/Home";
import { SignupPage } from "./pages/SignupPage";
import Contact from "./pages/Contact/Contact";
import { Landing } from "./pages/Landing/Landing";
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
            <Route exact path="/contact" component={Contact} />
            <ProtectedRoute path="/landing" component={Landing} />
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
