import React, { Component, Fragment } from "react";
import $ from "jquery";
import { connect } from "react-redux";
import Codes from "./Components/Codes";
import Header from "./Components/Header";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
    };
  }
  getResumeData() {
    $.ajax({
      url: "/resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div>
        <Router>
          <Fragment>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/codes" component={Codes} />
              <Route path="/*" render={() => <Redirect to="/home" />} />
            </Switch>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
