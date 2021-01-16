import React from "react";
import { socials } from "../../data/socials";

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
                    I'm <span className="base-color"> Diletta De Bellis</span>
                  </h1>
                  <h4 className="text-capitalize mb-0">
                    <span className="base-color">A </span>{" "}
                    <span
                      className="element"
                      data-elements="Web Marketing Specialist.,Social Media Strategist.,Digital Communication Consultant."
                    />
                  </h4>
                  <p className="max-width-450 mx-0 my-4">
                    In a professional context it often happens that private
                    clients corder a publication to be made.
                  </p>
                  <ul className="list-inline hero-social">
                    {socials.map((social, index) => (
                      <li key={index} className="list-inline-item">
                        <a
                          href={social.url}
                          title={social.title}
                          target="_blank"
                        >
                          <i className={`fa ${social.icon}`} />
                        </a>
                      </li>
                    ))}
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
