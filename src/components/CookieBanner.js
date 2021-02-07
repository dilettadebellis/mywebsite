import React, { useState } from "react";
import { useCookies } from "react-cookie";

export const COOKIE_ACCEPTED = "as-cookies-accepted";

export default function ({}) {
  const [visible, setVisible] = useState(true);
  const [cookies, setCookie] = useCookies([COOKIE_ACCEPTED]);

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
            Cookies allow us to deliver and improve our web content and to
            provide you with a personalized experience. Our website uses cookies
            for these purposes.{" "}
            <a className="cookie-banner-link" href="#">
              Learn more.
            </a>
          </p>
        </div>
        <div className="col-12 col-md-2 mt-md-0 mt-3 text-md-left text-right">
          <a
            href="#!"
            onClick={(e) => handleClick(e, false)}
            className="cookie-banner-button secondary mr-3"
          >
            <i className="fa fa-close" />
            <span>Decline</span>
          </a>
          <a
            href="#!"
            onClick={(e) => handleClick(e, true)}
            className="cookie-banner-button"
          >
            <i className="fa fa-check" />
            <span>Accept</span>
          </a>
        </div>
      </div>
    </div>
  );
}
