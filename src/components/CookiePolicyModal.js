import React from "react";
import useGlobalState from "../lib/globalState";
import MarkdownView from "react-showdown";
import { useEntitySingleRowData } from "../lib/hooks/data/entities";

const CookiePolicyModal = () => {
  const cookiePolicy = useEntitySingleRowData("cookiePolicy");

  if (!cookiePolicy) {
    return null;
  }

  return (
    <div
      className="portfolio-single modal fade"
      id="cookie-policy-modal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby={`portfolioModalScrollable-cookie-policy`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable" role="document">
        <div className="modal-content text-muted">
          <div className="modal-header">
            <h5
              className="modal-title"
              id={`portfolioModalScrollable-cookie-policy`}
            >
              {`${cookiePolicy.title.split("*|*")[0]} ${
                cookiePolicy.title.split("*|*")[1]
              }`}
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
                        {cookiePolicy.title.split("*|*")[0]}{" "}
                        <span className="base-color">
                          {" "}
                          {cookiePolicy.title.split("*|*")[1]}
                        </span>
                      </h2>
                    </div>
                    <div className="text-md-left mt-5">
                      <MarkdownView
                        markdown={cookiePolicy.text}
                        options={{ emoji: true }}
                      />
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

export default CookiePolicyModal;
