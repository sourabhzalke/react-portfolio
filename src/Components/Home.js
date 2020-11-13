import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./Home.css";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Resume from "./Resume";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
import Portfolio from "./Portfolio";
import CovidTracker from "./CovidTracker";

class Home extends Component {
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
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <CovidTracker />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.portfolio} />
        {/*<Testimonials data={this.state.resumeData.testimonials} />*/}
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default Home;
