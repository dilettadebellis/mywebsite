import React from "react";
import useGlobalState from "../../lib/globalState";
import CookieItem from "./CookieItem";

const CookiesModal = () => {
  const { texts } = useGlobalState();
  const cookies = texts.cookies.cookies;
  const bannerTexts = texts.global.cookieBanner;
  return (
    <div
      className="portfolio-single modal fade"
      id="cookies-modal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby={`portfolioModalScrollable-cookie-policy`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable" role="document">
        <div className="modal-content text-muted">
          <div className="modal-header">
            <h5 className="modal-title">
              {`${bannerTexts.cookiesTitle[0]} ${bannerTexts.cookiesTitle[1]}`}
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
                        {bannerTexts.cookiesTitle[0]}{" "}
                        <span className="base-color">
                          {" "}
                          {bannerTexts.cookiesTitle[1]}
                        </span>
                      </h2>
                    </div>
                    <div className="text-md-left mt-5">
                      {cookies.map((cookie, index) => (
                        <>
                          <CookieItem
                            key={index}
                            code={cookie.code}
                            title={cookie.title}
                            editable={cookie.editable}
                            description={cookie.description}
                          />
                          {index < cookies.length - 1 ? (
                            <hr className="cookie-item-divider" />
                          ) : null}
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <div className="button-border mt-3 mb-lg-0 mr-4">
              <a className="pill-button">{bannerTexts.declineAll}</a>
            </div>
            <div className="button-border mt-3 mb-lg-0 to-contact">
              <a className="pill-button base-color">{bannerTexts.accept}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesModal;
