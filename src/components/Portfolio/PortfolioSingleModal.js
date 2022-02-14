import React, { useEffect, useState } from "react";
import useGlobalState from "../../lib/globalState";
import PortfolioSlider from "./PortfolioSlider";
import MarkdownView from "react-showdown";
import { fetchData } from "../../lib/data";

function PortfolioSingleModal({
  name,
  longName,
  shortDescription,
  client,
  completedOn,
  skills,
  mainImages,
  longDescription,
  modalId,
  url,
}) {
  const { lang } = useGlobalState();
  const [modalTexts, setModalTexts] = useState(null);
  const [defaultMainImage, setDefaultMainImage] = useState(null);

  useEffect(() => {
    loadModalTexts();
    loadDefaultMainImage();
  }, []);

  const loadModalTexts = async () => {
    const response = await fetchData("global", lang);
    if (response.status === 200) {
      setModalTexts(response.data.global.heroPortfolio.portfolioModal);
    } else {
      console.log(response);
    }
  };

  const loadDefaultMainImage = async () => {
    const response = await fetchData("works", lang);
    if (response.status === 200) {
      setDefaultMainImage(response.data.defaultMainImage);
    } else {
      console.log(response);
    }
  };

  if (!modalTexts || !defaultMainImage) {
    return null;
  }

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
                            <h6>{modalTexts.client}:</h6>
                            <p className="mb-0">{client}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 p-title-border mt-3 mt-md-0">
                        <div className="text-center">
                          <div>
                            <h6 className="contact_detail-title">
                              {modalTexts.year}:
                            </h6>
                            <p className="mb-0">
                              {new Date(completedOn).getFullYear()}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mt-3 mt-md-0">
                        <div className="text-center">
                          <div>
                            <h6>{modalTexts.services}:</h6>
                            <p className="mb-0">{skills.join(" / ")}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5">
                      <div className="portfolio-single-item image-border">
                        <PortfolioSlider
                          images={mainImages}
                          modalId={modalId}
                          name={name}
                          defaultMainImage={defaultMainImage}
                        />
                      </div>
                    </div>
                    {url ? (
                      <div className="row mt-5 additional-info justify-content-center">
                        <div className="col-12 col-md-6 text-center website">
                          <i className="fa fa-desktop" />
                          <h6 className="mb-0">
                            <a
                              className="link-style"
                              href={url}
                              target="_blank"
                            >
                              {modalTexts.url}
                            </a>
                          </h6>
                        </div>
                      </div>
                    ) : null}
                    <div className="text-md-left mt-5">
                      {longDescription.map((part, index) => (
                        <div
                          key={index}
                          className={`my-3 ${
                            index === longDescription.length - 1 ? "mb-0" : ""
                          }`}
                        >
                          <MarkdownView
                            markdown={part}
                            options={{ emoji: true }}
                          />
                        </div>
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
