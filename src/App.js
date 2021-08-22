import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import { Switch, Route } from "react-router-dom";
import Question from "./components/Question";
import HomePage from "./components/HomePage";
import Result from "./components/Result";
import Review from "./components/Review";
import "./App.scss";
const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/question" component={Question} />
        <Route exact path="/result" component={Result} />
        <Route exact path="/review" component={Review} />
      </Switch>
    </>
  );
};

export default App;
