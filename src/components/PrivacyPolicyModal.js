import React from "react";
import useGlobalState from "../lib/globalState";
import MarkdownView from "react-showdown";

const PrivacyPolicyModal = () => {
  const { texts } = useGlobalState();
  const privacyPolicy = texts.privacy.privacyPolicy;
  return (
    <div
      className="portfolio-single modal fade"
      id="privacy-policy-modal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby={`portfolioModalScrollable-privacy-policy`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable" role="document">
        <div className="modal-content text-muted">
          <div className="modal-header">
            <h5
              className="modal-title"
              id={`portfolioModalScrollable-privacy-policy`}
            >
              {`${privacyPolicy.title[0]} ${privacyPolicy.title[1]}`}
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
                        {privacyPolicy.title[0]}{" "}
                        <span className="base-color">
                          {" "}
                          {privacyPolicy.title[1]}
                        </span>
                      </h2>
                    </div>
                    <div className="text-md-left mt-5">
                      {privacyPolicy.text.map((part, index) => (
                        <p
                          key={index}
                          className={`my-3 ${
                            index === privacyPolicy.text.length - 1
                              ? "mb-0"
                              : ""
                          }`}
                        >
                          {
                            <MarkdownView
                              markdown={part}
                              options={{ emoji: true }}
                            />
                          }
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
};

export default PrivacyPolicyModal;
