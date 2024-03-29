import React, { useEffect, useState } from "react";
import useGlobalState from "../lib/globalState";
import MarkdownView from "react-showdown";
import { fetchData } from "../lib/data";

const CookiePolicyModal = () => {
  const { lang } = useGlobalState();
  const [cookiePolicy, setCookiePolicy] = useState(null);

  useEffect(() => {
    loadCookiePolicy();
  }, []);

  const loadCookiePolicy = async () => {
    const response = await fetchData("cookie-policy", lang);
    if (response.status === 200) {
      setCookiePolicy(response.data.cookiePolicy);
    } else {
      console.log(response);
    }
  };

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
              {`${cookiePolicy.title[0]} ${cookiePolicy.title[1]}`}
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
                        {cookiePolicy.title[0]}{" "}
                        <span className="base-color">
                          {" "}
                          {cookiePolicy.title[1]}
                        </span>
                      </h2>
                    </div>
                    <div className="text-md-left mt-5">
                      {cookiePolicy.text.map((part, index) => (
                        <div
                          key={index}
                          className={`my-3 ${
                            index === cookiePolicy.text.length - 1 ? "mb-0" : ""
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
};

export default CookiePolicyModal;
