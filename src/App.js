import React, { Component } from "react";
import "./App.css";
import Start from "./components/start";
import About from "./components/about-me";
import Projects from "./components/projects";

var data = require("./manifest.json");

class App extends Component {
  state = {
    projectsData: []
  };

  componentWillMount() {
    this.setState({
      projectsData: data
    });
  }

  render() {
    return (
      <div>
        <Start projectsData={this.state.projectsData} />
        <About projectsData={this.state.projectsData} />
        <Projects projectsData={this.state.projectsData} />
      </div>
    );
  }
}

export default App;
