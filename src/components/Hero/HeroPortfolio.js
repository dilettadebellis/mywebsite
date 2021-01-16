import React from "react";

function HeroPortfolio({}) {
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
                    In a professional context it often happens that private
                    clients corder a publication to be made.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <ul
                id="portfolio-filter"
                className="list-unstyled list-inline mb-0 col-lg-12 text-center portfolio-filter"
              >
                <li className="button-border list-inline-item">
                  <a href="#" data-filter="*" className="pill-button active">
                    All
                  </a>
                </li>
                <li className="button-border list-inline-item">
                  <a href="#" data-filter=".webdesign" className="pill-button">
                    Web Design
                  </a>
                </li>
                <li className="button-border list-inline-item">
                  <a
                    href="#"
                    data-filter=".mobiledesign"
                    className="pill-button"
                  >
                    Mobile Design
                  </a>
                </li>
                <li className="button-border list-inline-item">
                  <a href="#" data-filter=".seo" className="pill-button">
                    Seo
                  </a>
                </li>
                <li className="button-border list-inline-item">
                  <a href="#" data-filter=".graphic" className="pill-button">
                    Graphic
                  </a>
                </li>
              </ul>
            </div>
            <div className="portfolio-items row">
              <div className="col-lg-4 portfolio-item seo">
                <div className="image-border">
                  <div className="portfolio-item-content">
                    <img
                      src="https://placehold.co/600x450"
                      alt="/"
                      className="img-fluid"
                    />
                    <div className="img-overlay text-center">
                      <div className="img-overlay-content">
                        <div className="portfolio-icon">
                          <a
                            href="javascript:void();"
                            type="button"
                            data-toggle="modal"
                            data-target="#portfolio-single"
                          >
                            <i className="lni-link" />
                          </a>
                          <a
                            href="https://placehold.co/600x450"
                            className="js-zoom-gallery"
                          >
                            <i className="lni-search" />
                          </a>
                        </div>
                        <h5 className="mt-3 mb-0">My Work</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 portfolio-item graphic webdesign">
                <div className="image-border">
                  <div className="portfolio-item-content">
                    <img
                      src="https://placehold.co/600x450"
                      alt="/"
                      className="img-fluid"
                    />
                    <div className="img-overlay text-center">
                      <div className="img-overlay-content">
                        <div className="portfolio-icon">
                          <a
                            href="javascript:void();"
                            type="button"
                            data-toggle="modal"
                            data-target="#portfolio-single"
                          >
                            <i className="lni-link" />
                          </a>
                          <a
                            href="https://placehold.co/600x450"
                            className="js-zoom-gallery"
                          >
                            <i className="lni-search" />
                          </a>
                        </div>
                        <h5 className="mt-3 mb-0">My Work</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 portfolio-item webdesign graphic">
                <div className="image-border">
                  <div className="portfolio-item-content">
                    <img
                      src="https://placehold.co/600x450"
                      alt="/"
                      className="img-fluid"
                    />
                    <div className="img-overlay text-center">
                      <div className="img-overlay-content">
                        <div className="portfolio-icon">
                          <a
                            href="javascript:void();"
                            type="button"
                            data-toggle="modal"
                            data-target="#portfolio-single"
                          >
                            <i className="lni-link" />
                          </a>
                          <a
                            href="https://placehold.co/600x450"
                            className="js-zoom-gallery"
                          >
                            <i className="lni-search" />
                          </a>
                        </div>
                        <h5 className="mt-3 mb-0">My Work</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 portfolio-item mobiledesign webdesign">
                <div className="image-border">
                  <div className="portfolio-item-content">
                    <img
                      src="https://placehold.co/600x450"
                      alt="/"
                      className="img-fluid"
                    />
                    <div className="img-overlay text-center">
                      <div className="img-overlay-content">
                        <div className="portfolio-icon">
                          <a
                            href="javascript:void();"
                            type="button"
                            data-toggle="modal"
                            data-target="#portfolio-single"
                          >
                            <i className="lni-link" />
                          </a>
                          <a
                            href="https://placehold.co/600x450"
                            className="js-zoom-gallery"
                          >
                            <i className="lni-search" />
                          </a>
                        </div>
                        <h5 className="mt-3 mb-0">My Work</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 portfolio-item mobiledesign seo">
                <div className="image-border">
                  <div className="portfolio-item-content">
                    <img
                      src="https://placehold.co/600x450"
                      alt="/"
                      className="img-fluid"
                    />
                    <div className="img-overlay text-center">
                      <div className="img-overlay-content">
                        <div className="portfolio-icon">
                          <a
                            href="javascript:void();"
                            type="button"
                            data-toggle="modal"
                            data-target="#portfolio-single"
                          >
                            <i className="lni-link" />
                          </a>
                          <a
                            href="https://placehold.co/600x450"
                            className="js-zoom-gallery"
                          >
                            <i className="lni-search" />
                          </a>
                        </div>
                        <h5 className="mt-3 mb-0">My Work</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 portfolio-item mobiledesign">
                <div className="image-border">
                  <div className="portfolio-item-content">
                    <img
                      src="https://placehold.co/600x450"
                      alt="/"
                      className="img-fluid"
                    />
                    <div className="img-overlay text-center">
                      <div className="img-overlay-content">
                        <div className="portfolio-icon">
                          <a
                            href="javascript:void();"
                            type="button"
                            data-toggle="modal"
                            data-target="#portfolio-single"
                          >
                            <i className="lni-link" />
                          </a>
                          <a
                            href="https://placehold.co/600x450"
                            className="js-zoom-gallery"
                          >
                            <i className="lni-search" />
                          </a>
                        </div>
                        <h5 className="mt-3 mb-0">My Work</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 portfolio-item mobiledesign webdesign">
                <div className="image-border">
                  <div className="portfolio-item-content">
                    <img
                      src="https://placehold.co/600x450"
                      alt="/"
                      className="img-fluid"
                    />
                    <div className="img-overlay text-center">
                      <div className="img-overlay-content">
                        <div className="portfolio-icon">
                          <a
                            href="javascript:void();"
                            type="button"
                            data-toggle="modal"
                            data-target="#portfolio-single"
                          >
                            <i className="lni-link" />
                          </a>
                          <a
                            href="https://placehold.co/600x450"
                            className="js-zoom-gallery"
                          >
                            <i className="lni-search" />
                          </a>
                        </div>
                        <h5 className="mt-3 mb-0">My Work</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 portfolio-item webdesign graphic">
                <div className="image-border">
                  <div className="portfolio-item-content">
                    <img
                      src="https://placehold.co/600x450"
                      alt="/"
                      className="img-fluid"
                    />
                    <div className="img-overlay text-center">
                      <div className="img-overlay-content">
                        <div className="portfolio-icon">
                          <a
                            href="javascript:void();"
                            type="button"
                            data-toggle="modal"
                            data-target="#portfolio-single"
                          >
                            <i className="lni-link" />
                          </a>
                          <a
                            href="https://placehold.co/600x450"
                            className="js-zoom-gallery"
                          >
                            <i className="lni-search" />
                          </a>
                        </div>
                        <h5 className="mt-3 mb-0">My Work</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 portfolio-item seo">
                <div className="image-border">
                  <div className="portfolio-item-content">
                    <img
                      src="https://placehold.co/600x450"
                      alt="/"
                      className="img-fluid"
                    />
                    <div className="img-overlay text-center">
                      <div className="img-overlay-content">
                        <div className="portfolio-icon">
                          <a
                            href="javascript:void();"
                            type="button"
                            data-toggle="modal"
                            data-target="#portfolio-single"
                          >
                            <i className="lni-link" />
                          </a>
                          <a
                            href="https://placehold.co/600x450"
                            className="js-zoom-gallery"
                          >
                            <i className="lni-search" />
                          </a>
                        </div>
                        <h5 className="mt-3 mb-0">My Work</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 portfolio-item mobiledesign seo">
                <div className="image-border">
                  <div className="portfolio-item-content">
                    <img
                      src="https://placehold.co/600x450"
                      alt="/"
                      className="img-fluid"
                    />
                    <div className="img-overlay text-center">
                      <div className="img-overlay-content">
                        <div className="portfolio-icon">
                          <a
                            href="javascript:void();"
                            type="button"
                            data-toggle="modal"
                            data-target="#portfolio-single"
                          >
                            <i className="lni-link" />
                          </a>
                          <a
                            href="https://placehold.co/600x450"
                            className="js-zoom-gallery"
                          >
                            <i className="lni-search" />
                          </a>
                        </div>
                        <h5 className="mt-3 mb-0">My Work</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 portfolio-item webdesign graphic">
                <div className="image-border">
                  <div className="portfolio-item-content">
                    <img
                      src="https://placehold.co/600x450"
                      alt="/"
                      className="img-fluid"
                    />
                    <div className="img-overlay text-center">
                      <div className="img-overlay-content">
                        <div className="portfolio-icon">
                          <a
                            href="javascript:void();"
                            type="button"
                            data-toggle="modal"
                            data-target="#portfolio-single"
                          >
                            <i className="lni-link" />
                          </a>
                          <a
                            href="https://placehold.co/600x450"
                            className="js-zoom-gallery"
                          >
                            <i className="lni-search" />
                          </a>
                        </div>
                        <h5 className="mt-3 mb-0">My Work</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 portfolio-item seo graphic">
                <div className="image-border">
                  <div className="portfolio-item-content">
                    <img
                      src="https://placehold.co/600x450"
                      alt="/"
                      className="img-fluid"
                    />
                    <div className="img-overlay text-center">
                      <div className="img-overlay-content">
                        <div className="portfolio-icon">
                          <a
                            href="javascript:void();"
                            type="button"
                            data-toggle="modal"
                            data-target="#portfolio-single"
                          >
                            <i className="lni-link" />
                          </a>
                          <a
                            href="https://placehold.co/600x450"
                            className="js-zoom-gallery"
                          >
                            <i className="lni-search" />
                          </a>
                        </div>
                        <h5 className="mt-3 mb-0">My Work</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                <div className="button-border d-inline-block">
                  <a href="portfolio.html" className="pill-button">
                    Portfolio Page
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroPortfolio;
