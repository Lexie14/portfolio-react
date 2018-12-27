import React, { Component } from "react";
import "./App.css";
import Start from "./components/start";
import About from "./components/about-me";
import Projects from "./components/projects";

class App extends Component {
  state = {
    items: [
      {
        src: require("./img/tic-tac-toe.png"),
        title: "Tic Tac Toe",
        skills: ["html5", "css3", "react"],
        url: "https://github.com/Lexie14/tic-tac-toe"
      },
      {
        src: require("./img/portfolio.png"),
        title: "Portfolio Website",
        skills: ["html5", "css3", "react", "./bootstrap.png"],
        url: "https://github.com/Lexie14/portfolio-react"
      },
      {
        src: require("./img/neighborhood.png"),
        title: "Neighborhood Map",
        skills: ["html5", "css3", "react"],
        url: "https://github.com/Lexie14/Neighborhood-Map"
      },
      {
        src: require("./img/reads.png"),
        title: "My Reads",
        skills: ["html5", "css3", "react"],
        url: "https://github.com/Lexie14/reactnd-project-myreads-starter"
      },
      {
        src: require("./img/reviews.jpg"),
        title: "Restaurant Reviews",
        skills: ["html5", "css3", "react"],
        url: "https://github.com/Lexie14/restaurant-reviews"
      },
      {
        src: require("./img/arcade-game.png"),
        title: "Arcade Game",
        skills: ["html5", "css3", "js"],
        url: "https://github.com/Lexie14/arcade-game"
      },
      {
        src: require("./img/memory-game.png"),
        title: "Memory Game",
        skills: ["html5", "css3", "js"],
        url: "https://github.com/Lexie14/fend-project-memory-game"
      },
      {
        src: require("./img/pixel-maker.png"),
        title: "Pixel Art Maker",
        skills: ["html5", "css3", "js", "./jquery.png"],
        url: "https://github.com/Lexie14/pixel-art-maker"
      }
    ],
    skills: [
      { icon: "html5", title: "HTML5" },
      { icon: "css3", title: "CSS3" },
      { icon: "js", title: "JavaScript" },
      { icon: "./jquery.png", title: "jQuery" },
      { icon: "react", title: "ReactJs" },
      { icon: "./bootstrap.png", title: "Bootstrap" }
    ]
  };
  render() {
    return (
      <div>
        <Start skills={this.state.skills} />
        <About items={this.state.items} />
        <Projects items={this.state.items} />
      </div>
    );
  }
}

export default App;
