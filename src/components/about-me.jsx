import React, { Component } from "react";
import { Carousel, CarouselItem, CarouselControl } from "reactstrap";

// const items = [
//   { src: require("../img/tic-tac-toe.png") },
//   { src: require("../img/portfolio.png") },
//   { src: require("../img/neighborhood.png") },
//   { src: require("../img/reads.png") },
//   { src: require("../img/reviews.jpg") },
//   { src: require("../img/arcade-game.png") },
//   { src: require("../img/memory-game.png") },
//   { src: require("../img/pixel-maker.png") }
// ];

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  next = () => {
    const nextIndex =
      this.state.activeIndex === this.props.items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous = () => {
    const nextIndex =
      this.state.activeIndex === 0
        ? this.props.items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  render() {
    const { activeIndex } = this.state;

    const slides = this.props.items.map(item => {
      return (
        <CarouselItem key={item.src}>
          <img src={item.src} alt={item.src} className="w-100" />
        </CarouselItem>
      );
    });

    return (
      <section id="about-me" className="container-fluid">
        <div className="row mx-2">
          <div className="col-11 col-sm-8 col-md-6 col-lg-4 mx-auto">
            <div className="row">
              <div className="col mt-4 align-self-center">
                <h2 className="text-center text-uppercase">about me</h2>
                <div className="about-me-underline bg-danger" />
              </div>
            </div>
            <div className="row my-3">
              <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
              >
                {slides}
                <CarouselControl
                  direction="prev"
                  onClickHandler={this.previous}
                />
                <CarouselControl direction="next" onClickHandler={this.next} />
              </Carousel>
            </div>
          </div>
          {/* text */}
          <div className="col-12 col-sm-11 col-lg-7 text-justify mx-auto my-4 align-self-start">
            <p>
              My journey in the Front-end development started with the Udacity
              Front-End Development Course which consists of 9 projects in Web
              Foundations (HTML5, CSS3, RWD), Javascript (objects, tools and
              testing in Jasmine framework), Front-end Applications (including
              usage of the Cache API, ServiceWorker and fetching data from the
              3-party API’s) and React.
              <br />
              <br />
              This experience involved challenges, sometimes frustration as well
              as persistency, insights and joy. And the main thing I’ve got
              eventually - is clear understanding that programming is my passion
              and something I’d like to constantly comprehend and master.
              <br />
              <br />
              Since that time I’ve been improving my skills, deepening my
              knowledge and learning new frameworks in the Front-end
              Development. Whereas still gaining huge satisfaction of how
              precise and logic lines of code behind the web page can turn into
              something beautiful and highly functional in the user’s eyes.
            </p>
          </div>
          {/* end of text */}
        </div>
      </section>
    );
  }
}

export default About;
