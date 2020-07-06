import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";

import Home from "./components/Home/Home";
import Calendar from "./components/Calendar/Calendar";

//TODO Web Template Studio: Add routes for your new pages here.
const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/calendar" component={Calendar} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
