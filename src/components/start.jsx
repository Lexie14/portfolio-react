import React, { Component } from "react";
import { FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
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
            </Nav>
          </Collapse>
        </Navbar>
        {/* end of navbar */}
        {/* blockquote */}
        <div className="row mr-3 align-items-end justify-content-end my-5 blockquote-height">
          <blockquote>
            <p>
              <FaQuoteLeft className="fa-1x mr-3" />
              <span className="quote">
                Coding is my art of self-expression . . .
              </span>
            </p>
          </blockquote>
        </div>
        {/* end of blockquote */}
        {/* skills */}
        <div className="d-flex flex-column text-center skills-height justify-content-end pb-5 mx-auto">
          <div className="row mb-3">
            <div className="col mt-4 align-self-center">
              <h2 className="text-center text-uppercase">skills</h2>
              <div className="skills-underline bg-danger " />
            </div>
          </div>
          <div className="row mb-3 text-center justify-content-around">
            <div className="col-4 col-md-2">
              <i className="fa fa-html5 fa-5x" />
              <h4>HTML5</h4>
            </div>
            <div className="col-4 col-md-2">
              <i className="fa fa-css3 fa-5x" />
              <h4>CSS3</h4>
            </div>
            <div className="col-4 col-md-2">
              <FaJs className="fa-5x" />
              <h4>JavaScript</h4>
            </div>
            <div className="col-4 col-md-2">
              <img src={require("../img/jquery.png")} className="icon" />
              <h4>jQuery</h4>
            </div>
            <div className="col-4 col-md-2">
              <FaReact className="fa-5x" />
              <h4>ReactJs</h4>
            </div>
            <div className="col-4 col-md-2">
              <img src={require("../img/bootstrap.png")} className="icon" />
              <h4>Bootstrap</h4>
            </div>
          </div>
        </div>
        {/* end of skills */}
      </section>
    );
  }
}

export default Start;
