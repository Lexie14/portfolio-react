import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

var images = require.context("../img", true);

class Projects extends Component {
  state = {};

  render() {
    const projects = this.props.items.map(item => {
      return (
        <div key={item.title} className="col-md-6 col-lg-4 my-4">
          <div className="card">
            <img
              src={item.src}
              alt={item.title}
              className="project card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title text-center mb-0">{item.title}</h5>
              <a
                href={item.url}
                target="_blank"
                className="btn text-uppercase d-block mx-auto mt-2"
              >
                View
              </a>
            </div>
            <div className="card-footer d-flex justify-content-around">
              {item.skills.map(it => {
                if (it[0] === ".") {
                  let img_src = images(`${it}`);
                  return (
                    <div>
                      <img src={img_src} alt="" className="skill-icon" />
                    </div>
                  );
                } else
                  return (
                    <div>
                      <FontAwesomeIcon icon={["fab", it]} size="2x" />
                    </div>
                  );
              })}
            </div>
          </div>
        </div>
      );
    });

    return (
      <section id="projects">
        <div className="container pb-5">
          <div className="row">
            <div className="col">
              <h2 className="text-center text-uppercase mt-4">projects</h2>
              <div className="projects-underline bg-danger" />
            </div>
          </div>
          <div className="row">{projects}</div>
        </div>
      </section>
    );
  }
}

export default Projects;
