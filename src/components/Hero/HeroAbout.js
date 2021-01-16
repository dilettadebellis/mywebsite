import React from "react";

function HeroAbout({}) {
  return (
    <section id="about" className="about">
      <div className="display-table">
        <div className="display-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center title">
                  <h2 className="text-dark">
                    About <span className="base-color">Me</span>
                  </h2>
                  <p className="text-muted max-width-450 mb-5">
                    In a professional context it often happens that private
                    clients corder a publication to be made.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="image-border">
                  <img src="https://placehold.co/690x460" alt="/" />
                </div>
              </div>
              <div className="col-lg-6 mt-4 mt-lg-0">
                <div className="personal-item ">
                  <h3 className="text-dark mt-4 mt-lg-0">
                    <span className="base-color">UI/UX</span> Designer & Web
                    Developer
                  </h3>
                  <div className="row">
                    <div className="col-6 personal-info">
                      <ul className="list-unstyled pt-4">
                        <li>
                          <p>
                            Birthday : <span> 1 April 1990</span>
                          </p>
                        </li>
                        <li>
                          <p>
                            Website : <span> www.retrina.com</span>
                          </p>
                        </li>
                        <li>
                          <p>
                            Phone : <span> +123 456 7890</span>
                          </p>
                        </li>
                        <li>
                          <p>
                            City : <span> New York, USA</span>
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6 personal-info">
                      <ul className="list-unstyled pt-4">
                        <li>
                          <p>
                            Age : <span> 30</span>
                          </p>
                        </li>
                        <li>
                          <p>
                            Degree : <span> Master</span>
                          </p>
                        </li>
                        <li>
                          <p>
                            Mail : <span> sample@retrina.com</span>
                          </p>
                        </li>
                        <li>
                          <p>
                            Freelance : <span> Available</span>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="button-border mt-3 mb-lg-0 mr-4">
                  <a
                    onClick={(e) => e.preventDefault()}
                    className="pill-button"
                  >
                    Download Cv
                  </a>
                </div>
                <div className="button-border mt-3 mb-lg-0 to-contact">
                  <a href="#contact" className="pill-button">
                    Hire Me
                  </a>
                </div>
              </div>
            </div>
            <div id="count-up" className="count-up text-center box-border">
              <div className="row">
                <div className="col-6 col-lg-3 my-3 count-item ">
                  <div className="count-icon">
                    <i className="lni-download base-color" />
                  </div>
                  <div className="my-3">
                    <span
                      className="timer count-number"
                      data-from="0"
                      data-to="286"
                      data-speed="5000"
                    >
                      0
                    </span>
                  </div>
                  <p className="mb-0">Files Download</p>
                </div>

                <div className="col-6 col-lg-3 my-3 count-item ">
                  <div className="count-icon">
                    <i className="lni-pencil-alt base-color" />
                  </div>
                  <div className="my-3">
                    <span
                      className="timer count-number"
                      data-from="0"
                      data-to="6549"
                      data-speed="5000"
                    >
                      0
                    </span>
                  </div>
                  <p className="mb-0">Project Done</p>
                </div>

                <div className="col-6 col-lg-3 my-3 count-item ">
                  <div className="count-icon">
                    <i className="lni-medall  base-color" />
                  </div>
                  <div className="my-3">
                    <span
                      className="timer count-number"
                      data-from="0"
                      data-to="793"
                      data-speed="5000"
                    >
                      0
                    </span>
                  </div>
                  <p className="mb-0">Get Award</p>
                </div>

                <div className="col-6 col-lg-3 my-3 count-item ">
                  <div className="count-icon">
                    <i className="lni-emoji-smile base-color" />
                  </div>
                  <div className="my-3">
                    <span
                      className="timer count-number"
                      data-from="0"
                      data-to="286"
                      data-speed="5000"
                    >
                      0
                    </span>
                  </div>
                  <p className="mb-0">Happy Client</p>
                </div>
              </div>
            </div>

            <div className="services">
              <div className="row mt-5 ">
                <div className="col-12">
                  <h3 className="mb-0 text-dark">
                    What <span className="base-color">I'm Doing</span>
                  </h3>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 text-left">
                  <div className="services-item box-hover-border">
                    <div className="float-left mt-lg-1 d-inline-block services-icon">
                      <i className="lni-brush-alt size-md base-color" />
                    </div>
                    <div className="services-content">
                      <h5 className="mb-3">Graphic Design</h5>
                      <p className="text-muted mb-0">
                        In a professional context it often happens that private
                        clients corder a publication to be made.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 text-left">
                  <div className="services-item box-hover-border">
                    <div className="float-left mt-lg-1 d-inline-block services-icon">
                      <i className="lni-check-mark-circle size-md base-color" />
                    </div>
                    <div className="services-content">
                      <h5 className="mb-3">Bootstrap support</h5>
                      <p className="text-muted mb-0">
                        In a professional context it often happens that private
                        clients corder a publication to be made.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 text-left">
                  <div className="services-item box-hover-border">
                    <div className="float-left mt-lg-1 d-inline-block services-icon">
                      <i className="lni-heart size-md base-color" />
                    </div>
                    <div className="services-content">
                      <h5 className="mb-3">Portfolio of works</h5>
                      <p className="text-muted mb-0">
                        In a professional context it often happens that private
                        clients corder a publication to be made.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 text-left">
                  <div className="services-item box-hover-border">
                    <div className="float-left mt-lg-1  d-inline-block services-icon">
                      <i className="lni-mobile size-md base-color" />
                    </div>
                    <div className="services-content">
                      <h5 className="mb-3">Responsive Theme</h5>
                      <p className="text-muted mb-0">
                        In a professional context it often happens that private
                        clients corder a publication to be made.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 text-left">
                  <div className="services-item box-hover-border">
                    <div className="float-left mt-lg-1 d-inline-block services-icon">
                      <i className="lni-world size-md base-color mb-0" />
                    </div>
                    <div className="services-content">
                      <h5 className="mb-3">Go Beyond Limits</h5>
                      <p className="text-muted mb-0">
                        In a professional context it often happens that private
                        clients corder a publication to be made.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 text-left">
                  <div className="services-item box-hover-border">
                    <div className="float-left mt-lg-1 d-inline-block services-icon">
                      <i className="lni-cup size-md base-color" />
                    </div>
                    <div className="services-content">
                      <h5 className="mb-3">Premium Slider</h5>
                      <p className="text-muted mb-0">
                        In a professional context it often happens that private
                        clients corder a publication to be made.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial mt-5">
              <div className="col-12">
                <h3 className="mb-0 text-dark">
                  Client <span className="base-color">Says</span>
                </h3>
              </div>
              <div className="owl-carousel">
                <div className="testimonial-item box-border">
                  <div className="testimonial-image">
                    <div className="testimonial-image-border">
                      <img src="https://placehold.co/85x85" alt="/" />
                    </div>
                  </div>
                  <p className="mb-0 mt-2 text-muted">
                    " In a professional context it often that private or
                    corporate clients publication to be made.In a professional
                    context it often happens that private."
                  </p>
                  <span className="d-block mt-3 font-weight-bold mr-2">
                    John Doe,
                    <small className="text-muted"> CEO Management</small>
                  </span>
                </div>

                <div className="testimonial-item box-border">
                  <div className="testimonial-image">
                    <div className="testimonial-image-border">
                      <img src="https://placehold.co/85x85" alt="/" />
                    </div>
                  </div>
                  <p className="mb-0 mt-2 text-muted">
                    " In a professional context it often that private or
                    corporate clients publication to be made.In a professional
                    context it often happens that private."
                  </p>
                  <span className="d-block mt-3 font-weight-bold mr-2">
                    Mary Jane,{" "}
                    <small className="text-muted">Marketing Head</small>
                  </span>
                </div>

                <div className="testimonial-item box-border">
                  <div className="testimonial-image">
                    <div className="testimonial-image-border">
                      <img src="https://placehold.co/85x85" alt="/" />
                    </div>
                  </div>
                  <p className="mb-0 mt-2 text-muted">
                    " In a professional context it often that private or
                    corporate clients publication to be made.In a professional
                    context it often happens that private."
                  </p>
                  <span className="d-block mt-3 font-weight-bold mr-2">
                    Jully Doe,{" "}
                    <small className="text-muted">Design Strategist</small>
                  </span>
                </div>

                <div className="testimonial-item box-border">
                  <div className="testimonial-image">
                    <div className="testimonial-image-border">
                      <img src="https://placehold.co/85x85" alt="/" />
                    </div>
                  </div>
                  <p className="mb-0 mt-2 text-muted">
                    " In a professional context it often that private or
                    corporate clients publication to be made.In a professional
                    context it often happens that private."
                  </p>
                  <span className="d-block mt-3 font-weight-bold mr-2">
                    John Doe,{" "}
                    <small className="text-muted">CEO Management</small>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroAbout;
