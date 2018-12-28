import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

var images = require.context("../img", true);

class Projects extends Component {
  state = {};

  render() {
    const projects = this.props.projectsData.items.map(item => {
      let item_src = images(`${item.src}`);
      return (
        <div key={item.title} className="col-md-6 col-lg-4 my-3 mx-auto">
          <div className="card">
            <img
              src={item_src}
              alt={item.title}
              className="project card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title text-center mb-0">{item.title}</h5>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn text-uppercase d-block mx-auto mt-2"
              >
                View
              </a>
            </div>
            <div className="card-footer d-flex justify-content-around">
              {item.skills.map(skill => {
                if (skill[0] === ".") {
                  let img_src = images(`${skill}`);
                  return (
                    <div key={skill}>
                      <img src={img_src} alt={img_src} className="skill-icon" />
                    </div>
                  );
                } else
                  return (
                    <div key={skill}>
                      <FontAwesomeIcon icon={["fab", skill]} size="2x" />
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
        <div className="container">
          <div className="col pt-4">
            <h2 className="text-center text-uppercase">projects</h2>
            <div className="projects-underline bg-danger" />
          </div>
          <div className="row">{projects}</div>
        </div>
      </section>
    );
  }
}

export default Projects;
