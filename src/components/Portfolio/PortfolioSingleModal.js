import React from "react";
import { defaultMainImage } from "../../data/works";

function PortfolioSingleModal({
  name,
  longName,
  shortDescription,
  client,
  completedOn,
  skills,
  mainImage,
  longDescription,
  modalId,
}) {
  return (
    <div
      className="portfolio-single modal fade"
      id={modalId}
      tabIndex="-1"
      role="dialog"
      aria-labelledby={`portfolioModalScrollable-${modalId}`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable" role="document">
        <div className="modal-content text-muted">
          <div className="modal-header">
            <h5
              className="modal-title"
              id={`portfolioModalScrollable-${modalId}`}
            >
              {name}
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
                        {longName[0]}{" "}
                        <span className="base-color"> {longName[1]}</span>
                      </h2>
                      <p className="max-width-450">{shortDescription}</p>
                    </div>
                    <div className="row contact-info mt-5">
                      <div className="col-md-4">
                        <div className="text-center">
                          <div>
                            <h6>Client:</h6>
                            <p className="mb-0">{client}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 p-title-border mt-3 mt-md-0">
                        <div className="text-center">
                          <div>
                            <h6 className="contact_detail-title">Year:</h6>
                            <p className="mb-0">
                              {new Date(completedOn).getFullYear()}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mt-3 mt-md-0">
                        <div className="text-center">
                          <div>
                            <h6>Services:</h6>
                            <p className="mb-0">{skills.join(" / ")}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5">
                      <div className="portfolio-single-item image-border">
                        <img
                          src={
                            mainImage.length > 0 ? mainImage : defaultMainImage
                          }
                          className="d-block"
                          alt={name}
                        />
                      </div>
                    </div>
                    <div className="text-md-left mt-5">
                      {longDescription.map((part, index) => (
                        <p
                          className={`my-3 ${
                            index === longDescription.length - 1 ? "mb-0" : ""
                          }`}
                        >
                          {part}
                        </p>
                      ))}
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