import React, { Component } from "react";

class Articles extends Component {
  render() {
    const { error, hits } = this.props;

    if (error) {
      console.log(error.message);
    }

    let articles = hits
      .filter(hit => hit.url !== null)
      .map(hit => {
        return (
          <li key={hit.objectID} className="articles-item">
            <a href={hit.url} target="_blank" rel="noopener noreferrer">
              {hit.title}
            </a>
          </li>
        );
      });

    return (
      <section id="articles">
        <div className="container-fluid">
          <div className="row">
            <div className="col mt-4 align-self-center">
              <h2 className="text-center text-uppercase">useful articles</h2>
              <div className="articles-underline bg-danger" />
            </div>
          </div>
          <div className="row mt-4 align-self-center">
            {error ? (
              <p>{error.message}</p>
            ) : (
              <div className="row mx-auto">
                <ul className="col justify-content-center articles-list m-auto">
                  {articles}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Articles;
