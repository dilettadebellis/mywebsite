import React from "react";

function PortfolioSingleModal({}) {
  return (
    <div
      className="portfolio-single modal fade"
      id="portfolio-single"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="portfolioModalScrollable"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable" role="document">
        <div className="modal-content text-muted">
          <div className="modal-header">
            <h5 className="modal-title" id="portfolioModalScrollable">
              My Work
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="pt-4 pb-5">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-10 mx-auto">
                    <div className="text-center">
                      <h2 className="mb-3">
                        Single <span className="base-color"> Portfolio</span>
                      </h2>
                      <p className="max-width-450">
                        In a professional context it often happens that private
                        clients corder a publication to be made.
                      </p>
                    </div>
                    <div className="row contact-info mt-5">
                      <div className="col-md-4">
                        <div className="text-center">
                          <div>
                            <h6>Created by:</h6>
                            <p className="mb-0">Olivia Doe</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 p-title-border mt-3 mt-md-0">
                        <div className="text-center">
                          <div>
                            <h6 className="contact_detail-title">
                              Completed on:
                            </h6>
                            <p className="mb-0">September 30, 2019</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mt-3 mt-md-0">
                        <div className="text-center">
                          <div>
                            <h6>Skills:</h6>
                            <p className="mb-0">HTML5 / PHP / CSS3</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5">
                      <div className="portfolio-single-item image-border">
                        <img
                          src="https://placehold.co/600x450"
                          className="d-block"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="text-md-left mt-5">
                      <p className="my-3">
                        These words are here to provide the reader with a basic
                        impression of how actual text will appear in its final
                        presentation. This is dummy copy. It is not meant to be
                        read. It has been placed here solely to demonstrate the
                        look and feel of finished, typeset text. These words are
                        here to provide the reader with a basic impression of
                        how actual text will appear in its final presentation.
                        Only for show.
                      </p>
                      <p className="mt-3 mb-0">
                        These words are here to provide the reader with a basic
                        impression of how actual text will appear in its final
                        presentation. This is dummy copy. It is not meant to be
                        read. It has been placed here solely to demonstrate the
                        look and feel of finished, typeset text. These words are
                        here to provide the reader with a basic impression of
                        how actual text will appear in its final presentation.
                        Only for show.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioSingleModal;
