import React, { Component } from "react";
import ViewStudents from "./ViewStudents";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <p>This is the home page</p>
          </Route>
          <Route path="/view_students/" component={ViewStudents} />
        </Switch>
      </Router>
    );
  }
}