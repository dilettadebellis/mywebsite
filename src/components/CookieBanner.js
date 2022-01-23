import React, { useState } from "react";
import { useCookies } from "react-cookie";
import useGlobalState from "../lib/globalState";

export const COOKIE_ACCEPTED = "as-cookies-accepted";

export default function ({}) {
  const [visible, setVisible] = useState(true);
  const [cookies, setCookie] = useCookies([COOKIE_ACCEPTED]);
  const { texts } = useGlobalState();
  const bannerTexts = texts.global.cookieBanner;

  const saveCookie = (isYes) => {
    if (isYes) {
      // Save cookie with yes value
      console.log("Cookies accepted");
      setCookie(COOKIE_ACCEPTED, true, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
      });
    } else {
      // Save cookie with no value
      console.log("Cookies denied");
      setCookie(COOKIE_ACCEPTED, false, {
        path: "/",
        maxAge: 60 * 60,
      });
    }
    setVisible(false);
  };

  const handleClick = (e, isYes) => {
    e.preventDefault();
    saveCookie(isYes);
  };

  if (cookies[COOKIE_ACCEPTED]) {
    return null;
  }

  if (!visible) {
    return null;
  }

  return (
    <div className="cookie-banner-wrapper">
      <div className="row align-items-center">
        <div className="col-12 col-md-9 ml-lg-auto">
          <p className="cookie-banner-text mb-0">
            {bannerTexts.textMain}{" "}
            <a
              className="cookie-banner-link"
              href="#!"
              onClick={(e) => e.preventDefault()}
              data-toggle="modal"
              data-target={`#cookie-policy-modal`}
            >
              {bannerTexts.learnMore}
            </a>
          </p>
        </div>
        <div className="col-12 col-md-2 mt-md-0 mt-3 text-md-left text-right">
          <a
            href="#!"
            onClick={(e) => handleClick(e, false)}
            className="cookie-banner-button secondary mr-md-3 mr-2"
          >
            <i className="fa fa-close" />
            <span>{bannerTexts.decline}</span>
          </a>
          <a
            href="#!"
            onClick={(e) => handleClick(e, true)}
            className="cookie-banner-button mr-md-3 mr-2"
          >
            <i className="fa fa-check" />
            <span>{bannerTexts.accept}</span>
          </a>
          <a
            href="#!"
            onClick={(e) => e.preventDefault()}
            data-toggle="modal"
            data-target={`#cookies-modal`}
            className="cookie-banner-button secondary"
          >
            <i className="fa fa-edit" />
            <span>{bannerTexts.customize}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
