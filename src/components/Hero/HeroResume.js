import React from "react";

function HeroResume({}) {
  return (
    <section id="resume" className="resume">
      <div className="display-table">
        <div className="display-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center title">
                  <h2 className="text-dark">
                    My <span className="base-color">Resume</span>
                  </h2>
                  <p className="text-muted max-width-450 mb-5">
                    In a professional context it often happens that private
                    clients corder a publication to be made.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <h3 className="text-dark">
                  <i className="lni-graduation base-color" />
                  Education
                </h3>
                <div className="timeline-items box-border">
                  <div className="timeline-item">
                    <div className="timeline-icon" />
                    <div className="timeline-contents">
                      <div className="time-line-header">
                        <h6 className="timeline-title">
                          Master In Computer Science
                        </h6>
                        <p className="timeline-year">2008 - 2012</p>
                      </div>
                      <div className="timeline-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque scelerisque diam non nisi semper, et
                          elementum lorem ornare.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-icon" />
                    <div className="timeline-contents">
                      <div className="time-line-header">
                        <h6 className="timeline-title">
                          Studied at New York University
                        </h6>
                        <p className="timeline-year">2012 - 2014</p>
                      </div>
                      <div className="timeline-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque scelerisque diam non nisi semper, et
                          elementum lorem ornare.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-icon" />
                    <div className="timeline-contents">
                      <div className="time-line-header">
                        <h6 className="timeline-title">UI/UX Developer </h6>
                        <p className="timeline-year">2014 - 2015</p>
                      </div>
                      <div className="timeline-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque scelerisque diam non nisi semper, et
                          elementum lorem ornare.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0">
                <h3 className="text-dark">
                  <i className="lni-pencil base-color" />
                  Experience
                </h3>
                <div className="timeline-items box-border">
                  <div className="timeline-item">
                    <div className="timeline-icon" />
                    <div className="timeline-contents">
                      <div className="time-line-header">
                        <h6 className="timeline-title">
                          Master In Computer Science
                        </h6>
                        <p className="timeline-year">2008 - 2012</p>
                      </div>
                      <div className="timeline-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque scelerisque diam non nisi semper, et
                          elementum lorem ornare.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-icon" />
                    <div className="timeline-contents">
                      <div className="time-line-header">
                        <h6 className="timeline-title">
                          Studied at New York University
                        </h6>
                        <p className="timeline-year">2012 - 2014</p>
                      </div>
                      <div className="timeline-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque scelerisque diam non nisi semper, et
                          elementum lorem ornare.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-icon" />
                    <div className="timeline-contents">
                      <div className="time-line-header">
                        <h6 className="timeline-title">UI/UX Developer </h6>
                        <p className="timeline-year">2014 - 2015</p>
                      </div>
                      <div className="timeline-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque scelerisque diam non nisi semper, et
                          elementum lorem ornare.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-lg-6">
                <div>
                  <h3 className="mb-0">
                    Work <span className="base-color"> Skills</span>
                  </h3>
                </div>
                <div id="skills" className="skill-box box-border">
                  <div className="skillbar clearfix" data-percent="95%">
                    <div className="skillbar-title">
                      <span>HTML</span>
                    </div>
                    <div className="skillbar-bar fill-skillbar" />
                    <div className="skill-bar-percent">95%</div>
                  </div>
                  <div className="skillbar clearfix " data-percent="85%">
                    <div className="skillbar-title">
                      <span>CSS</span>
                    </div>
                    <div className="skillbar-bar fill-skillbar" />
                    <div className="skill-bar-percent">85%</div>
                  </div>
                  <div className="skillbar clearfix" data-percent="75%">
                    <div className="skillbar-title">
                      <span>PHP</span>
                    </div>
                    <div className="skillbar-bar fill-skillbar" />
                    <div className="skill-bar-percent">75%</div>
                  </div>
                  <div className="skillbar clearfix" data-percent="80%">
                    <div className="skillbar-title">
                      <span>JQuery</span>
                    </div>
                    <div className="skillbar-bar fill-skillbar" />
                    <div className="skill-bar-percent">80%</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div>
                  <h3 className="mb-0 mt-5 mt-lg-0">
                    Language <span className="base-color"> Skills</span>
                  </h3>
                </div>
                <div className="language-bar box-border">
                  <div className="language-skill row">
                    <h4 className="col-6 text-left mb-0">
                      English <span> Fluent</span>
                    </h4>
                    <ul className="col-6 list-inline text-right mb-0">
                      <li className="list-inline-item">
                        <i className="fa fa-star" />
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star" />
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star" />
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star" />
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star-half-empty" />
                      </li>
                    </ul>
                  </div>
                  <div className="language-skill row">
                    <h4 className="col-6 text-left mb-0">
                      Arabic <span> Native</span>
                    </h4>
                    <ul className="col-6 list-inline text-right mb-0">
                      <li className="list-inline-item">
                        <i className="fa fa-star" />
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star" />
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star" />
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star" />
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star-half-empty" />
                      </li>
                    </ul>
                  </div>
                  <div className="language-skill row">
                    <h4 className="col-6 text-left mb-0">
                      Indian <span> Basic</span>
                    </h4>
                    <ul className="col-6 list-inline text-right mb-0">
                      <li className="list-inline-item">
                        <i className="fa fa-star" />
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star" />
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star" />
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star-o" />
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star-o" />
                      </li>
                    </ul>
                  </div>
                  <div className="language-skill row">
                    <h4 className="col-6 text-left mb-0">
                      Germany <span> Basic</span>
                    </h4>
                    <ul className="col-6 list-inline text-right mb-0">
                      <li className="list-inline-item">
                        <i className="fa fa-star" />
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star" />
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star" />
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star-o" />
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star-o" />
                      </li>
                    </ul>
                  </div>
                  <div className="language-skill row">
                    <h4 className="col-6 text-left mb-0">
                      Turkey <span> Basic</span>
                    </h4>
                    <ul className="col-6 list-inline text-right mb-0">
                      <li className="list-inline-item">
                        <i className="fa fa-star" />
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star" />
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star" />
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star-o" />
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star-o" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroResume;
