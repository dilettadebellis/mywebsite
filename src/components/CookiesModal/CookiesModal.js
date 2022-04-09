import React, { useState } from "react";
import useGlobalState from "../../lib/globalState";
import CookieItem from "./CookieItem";
import {
  useEntityAllData,
  useEntitySingleRowData,
} from "../../lib/hooks/data/entities";

const CookiesModal = () => {
  const { saveCookies } = useGlobalState();
  const [enabledCookies, setEnabledCookies] = useState({});
  const bannerTexts = useEntitySingleRowData("global_cookieBanner");
  const cookies = useEntityAllData("cookies");

  const addEnabledCookie = (cookieCode) => {
    setEnabledCookies((prevState) => ({ ...prevState, [cookieCode]: true }));
  };

  const removeEnabledCookie = (cookieCode) => {
    setEnabledCookies((prevState) => ({ ...prevState, [cookieCode]: false }));
  };

  const declineAll = () => {
    const cookieCodes = {};
    cookies.forEach((cookie) => {
      cookieCodes[cookie.code] = !cookie.editable;
    });
    saveCookies(cookieCodes);
    modalHide();
  };

  const accept = () => {
    saveCookies(enabledCookies);
    modalHide();
  };

  const modalHide = () => {
    window.jQuery("#cookies-modal").modal("hide");
  };

  if (!cookies || !bannerTexts) {
    return null;
  }

  return (
    <div
      className="cookie-modal modal fade"
      id="cookies-modal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby={`portfolioModalScrollable-cookie-policy`}
      aria-hidden="true"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div className="modal-dialog modal-dialog-scrollable" role="document">
        <div className="modal-content text-muted">
          {/*<div className="modal-header">
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
          </div>*/}
          <div className="modal-body">
            <div className="pt-3">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-10 mx-auto">
                    <div className="text-center">
                      <h2 className="mb-3">
                        {bannerTexts.cookiesTitle.split("*|*")[0]}{" "}
                        <span className="base-color">
                          {" "}
                          {bannerTexts.cookiesTitle.split("*|*")[1]}
                        </span>
                      </h2>
                    </div>
                    <div className="text-md-left mt-5">
                      <p className="cookie-item-content mb-5">
                        {bannerTexts.textMain}
                      </p>
                      {cookies.map((cookie, index) => (
                        <div key={index}>
                          <CookieItem
                            code={cookie.code}
                            title={cookie.title}
                            editable={cookie.editable}
                            description={cookie.description}
                            addEnabledCookie={addEnabledCookie}
                            removeEnabledCookie={removeEnabledCookie}
                          />
                          {index < cookies.length - 1 ? (
                            <hr className="cookie-banner-divider" />
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer justify-content-center">
            <div className="button-border mt-3 mb-lg-0 mr-4">
              <a onClick={declineAll} className="pill-button">
                {bannerTexts.declineAll}
              </a>
            </div>
            <div className="button-border mt-3 mb-lg-0">
              <a onClick={accept} className="pill-button base-color">
                {bannerTexts.accept}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesModal;
