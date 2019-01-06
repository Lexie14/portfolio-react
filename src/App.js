import React, { Component } from "react";
import "./App.css";
import Start from "./components/start";
import About from "./components/about-me";
import Projects from "./components/projects";
import Articles from "./components/articles";
import Contact from "./components/contact";

var data = require("./data.json");
const API =
  "https://hn.algolia.com/api/v1/search_by_date?tags=story&query=frontend&hitsPerPage=20";

class App extends Component {
  state = {
    projectsData: [],
    hits: [],
    error: null
  };

  componentWillMount() {
    this.setState(
      {
        projectsData: data
      },
      () => console.log(this.state.projectsData)
    );
  }

  componentDidMount() {
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(data => this.setState({ hits: data.hits }))
      .catch(error => this.setState({ error }));
  }

  render() {
    console.log(this.state.hits);
    return (
      <div>
        <Start projectsData={this.state.projectsData} />
        <About projectsData={this.state.projectsData} />
        <Projects projectsData={this.state.projectsData} />
        <Articles hits={this.state.hits} error={this.state.error} />
        {/* <Contact /> */}
      </div>
    );
  }
}

export default App;
