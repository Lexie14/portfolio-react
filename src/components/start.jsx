import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { FaQuoteLeft } from "react-icons/fa";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import "../App.css";

library.add(fab);

var images = require.context("../img", true);

class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const skills = this.props.projectsData.skills.map(skill => {
      if (skill.icon[0] === ".") {
        let img_src = images(`${skill.icon}`);
        return (
          <div key={skill.title} className="col-4 col-md-2">
            <img src={img_src} alt={img_src} className="icon" />
            <h4>{skill.title}</h4>
          </div>
        );
      } else
        return (
          <div key={skill.title} className="col-4 col-md-2">
            <FontAwesomeIcon icon={["fab", skill.icon]} size="5x" />
            <h4>{skill.title}</h4>
          </div>
        );
    });

    return (
      <section id="start" className="container-fluid">
        {/* navbar */}
        <Navbar className="navbar-dark pt-3 navbar-height" expand="md">
          <NavbarBrand href="/" className="text-uppercase font-italic">
            Lexie
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-item" href="#start">
                  home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-item" href="#about-me">
                  about me
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-item" href="#projects">
                  projects
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-item" href="#articles">
                  articles
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        {/* end of navbar */}
        {/* blockquote */}
        <div className="d-flex mt-5 blockquote-height align-items-end">
          <div className="col">
            <blockquote className="blockquote text-right">
              <p>
                <FaQuoteLeft className="fa-1x mr-3 quote-icon" />
                <span className="quote">
                  Coding is my art of self-expression . . .
                </span>
              </p>
            </blockquote>
          </div>
        </div>
        {/* end of blockquote */}
        {/* skills */}
        <div className="col d-flex flex-column text-center skills-height justify-content-end pb-2">
          <div className="row mb-3">
            <div className="col mt-4 align-self-center">
              <h2 className="text-center text-uppercase">skills</h2>
              <div className="skills-underline bg-danger" />
            </div>
          </div>
          <div className="row mb-3 text-center justify-content-around">
            {skills}
          </div>
        </div>
        {/* end of skills */}
      </section>
    );
  }
}

export default Start;
