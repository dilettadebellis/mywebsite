import React from "react";

function HeroHome({}) {
  return (
    <section id="hero" className="hero-01 active">
      <div className="display-table">
        <div className="display-content">
          <div className="container">
            <div className="row justify-content-center hero-item">
              <div className="col-lg-12">
                <div className="hero-content">
                  <h1 className="mb-3">
                    I'M <span className="base-color"> Olivia Doe</span>
                  </h1>
                  <h4 className="text-capitalize mb-0">
                    <span className="base-color">A </span>{" "}
                    <span
                      className="element"
                      data-elements="UI Designer.,Web Designer.,Web Developer."
                    />
                  </h4>
                  <p className="max-width-450 mx-0 my-4">
                    In a professional context it often happens that private
                    clients corder a publication to be made.
                  </p>
                  <ul className="list-inline hero-social">
                    <li className="list-inline-item">
                      <a onClick={(e) => e.preventDefault()}>
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a onClick={(e) => e.preventDefault()}>
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a onClick={(e) => e.preventDefault()}>
                        <i className="fa fa-github" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a onClick={(e) => e.preventDefault()}>
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
