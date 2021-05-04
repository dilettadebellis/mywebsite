import React from "react";
import PortfolioItem from "./PortfolioItem";
import { works, worksFilters } from "../../../data/works";
import Footer from "../../Footer";

export default function () {
  return (
    <section id="portfolio" className="portfolio">
      <div className="display-table">
        <div className="display-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center title">
                  <h2 className="text-dark">
                    My <span className="base-color">Works</span>
                  </h2>
                  <p className="text-muted mb-5 max-width-450">
                    You can find some of my works here. Enjoy!
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <ul
                id="portfolio-filter"
                className="list-unstyled list-inline mb-0 col-lg-12 text-center portfolio-filter"
              >
                {worksFilters.map((filter, index) => (
                  <li key={index} className="button-border list-inline-item">
                    <a
                      href="#"
                      data-filter={filter.code}
                      className={`pill-button ${index === 0 ? "active" : ""}`}
                    >
                      {filter.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="portfolio-items row">
              {works.map((work, index) => (
                <PortfolioItem
                  key={index}
                  name={work.name}
                  coverImage={work.coverImage}
                  filters={work.filters}
                  modalId={`single-portfolio-modal-${index}`}
                />
              ))}
            </div>
            <div className="row mt-4">
              <div className="col-12 text-center pt-2">
                <div className="button-border d-inline-block mr-2 mr-sm-4">
                  <button className="pill-button showMore" id="showMore">
                    Show More
                  </button>
                  <span
                    id="showMore-initials"
                    className="d-none"
                    data-initial="6"
                    data-next="3"
                  />
                </div>
                {/* <div className="button-border d-inline-block">
                  <a href="portfolio.html" className="pill-button">
                    Portfolio Page
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </section>
  );
}
