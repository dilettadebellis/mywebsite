import React from "react";

function HeroContact({}) {
  return (
    <section id="contact" className="contact">
      <div className="display-table">
        <div className="display-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center title">
                  <h2 className="text-dark">
                    Get <span className="base-color">in Touch</span>
                  </h2>
                  <p className="text-muted mb-5 max-width-450">
                    In a professional context it often happens that private
                    clients corder a publication to be made.
                  </p>
                </div>
              </div>
            </div>
            <div className="row contact-info">
              <div className="col-lg-4 mt-5">
                <div className="text-center">
                  <div className="base-color">
                    <i className="lni-phone-handset size-md" />
                  </div>
                  <div className="mt-3">
                    <h5 className="text-dark mb-0">Call Us On</h5>
                    <small className="text-muted">+123 456 7890</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt-5">
                <div className="text-center">
                  <div className="base-color">
                    <i className="lni-map-marker size-md" />
                  </div>
                  <div className="mt-3">
                    <h5 className="text-dark mb-0 contact_detail-title">
                      Visit Office
                    </h5>
                    <small className="text-muted">
                      24 Street, New York, United State.
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt-5">
                <div className="text-center">
                  <div className="base-color">
                    <i className="lni-pointer size-md" />
                  </div>
                  <div className="mt-3">
                    <h5 className="text-dark mb-0">Email Us At</h5>
                    <small className="text-muted">abc@gmail.com</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 mt-5 contact-form">
                <form id="contactForm">
                  <div className="row">
                    <div className="col-lg-6 form-item">
                      <div className="form-group">
                        <input
                          name="name"
                          id="name"
                          type="text"
                          className="form-control"
                          placeholder="Your Name*"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 form-item">
                      <div className="form-group">
                        <input
                          name="email"
                          id="email"
                          type="email"
                          className="form-control"
                          placeholder="Your Email*"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 form-item">
                      <div className="form-group">
                        <input
                          name="subject"
                          id="subject"
                          type="text"
                          className="form-control"
                          placeholder="Your Subject*"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 form-item">
                      <div className="form-group">
                        <textarea
                          name="comments"
                          id="comments"
                          rows="4"
                          className="form-control"
                          placeholder="Your message..."
                        />
                      </div>
                    </div>
                    <div className="col-sm-12 mt-4 text-left">
                      <div className="button-border">
                        <a
                          onClick={(e) => e.preventDefault()}
                          className="pill-button"
                          id="submit-btn"
                          onClick="sendEmail()"
                        >
                          Send Message
                        </a>
                      </div>
                      <div
                        id="message"
                        className="toast"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                        data-delay="4000"
                      >
                        <div className="toast-body d-inline-block" />
                        <button
                          type="button"
                          className="pr-3 close"
                          data-dismiss="toast"
                          aria-label="Close"
                        >
                          <span
                            aria-hidden="true"
                            className="lni-close size-xs "
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="row copy-right">
              <div className="col-12 text-center">
                <p>
                  Copyright © 2019. Template has been designed by{" "}
                  <span className="base-color">Retrina</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroContact;
