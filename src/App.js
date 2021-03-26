import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Nav/Navbar.js";
import Home from "./Components/Pages/Home";
import notFound from "./Components/Pages/notFound";

import Alert from "./Components/Alert/Alert";
import About from "./Components/Pages/About";
import User from "./Components/user/User";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div>
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/About" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={notFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
