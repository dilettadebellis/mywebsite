import React, { useEffect, useState } from "react";
import PortfolioItem from "./PortfolioItem";
import Footer from "../../Footer";
import useGlobalState from "../../../lib/globalState";
import { fetchData } from "../../../lib/data";

export default function HeroPortfolio() {
  const { lang } = useGlobalState();
  const [defaultCoverImage, setDefaultCoverImage] = useState(null);
  const [worksFilters, setWorksFilters] = useState(null);
  const [works, setWorks] = useState(null);
  const [globalTextsPortfolio, setGlobalTextsPortfolio] = useState(null);

  useEffect(() => {
    loadGlobalTextsPortfolio();
    loadWorksTexts();
  }, []);

  const loadGlobalTextsPortfolio = async () => {
    const response = await fetchData("global", lang);
    if (response.status === 200) {
      setGlobalTextsPortfolio(response.data.global.heroPortfolio);
    } else {
      console.log(response);
    }
  };

  const loadWorksTexts = async () => {
    const response = await fetchData("works", lang);
    if (response.status === 200) {
      const works = response.data;
      setDefaultCoverImage(works.defaultCoverImage);
      setWorksFilters(works.worksFilters);
      setWorks(works.works);
    } else {
      console.log(response);
    }
  };

  if (!globalTextsPortfolio || !defaultCoverImage || !works || !worksFilters) {
    return null;
  }

  return (
    <section id="portfolio" className="portfolio">
      <div className="display-table">
        <div className="display-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center title">
                  <h2 className="text-dark">
                    {globalTextsPortfolio.titleWhite}{" "}
                    <span className="base-color">
                      {globalTextsPortfolio.titlePink}
                    </span>
                  </h2>
                  <p className="text-muted mb-5 max-width-450">
                    {globalTextsPortfolio.subTitle}
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
                  defaultCoverImage={defaultCoverImage}
                />
              ))}
            </div>
            <div className="row mt-4">
              <div className="col-12 text-center pt-2">
                <div className="button-border d-inline-block mr-2 mr-sm-4">
                  <button className="pill-button showMore" id="showMore">
                    {globalTextsPortfolio.showMore}
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
