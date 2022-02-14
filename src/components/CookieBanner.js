import React, { useEffect, useState } from "react";
import useGlobalState from "../lib/globalState";
import { fetchData } from "../lib/data";

export default function CookieBanner() {
  const [visible, setVisible] = useState(true);
  const { lang, saveCookies, functionalCookieEnabled } = useGlobalState();
  const [bannerTexts, setBannerTexts] = useState(null);
  const [cookies, setCookies] = useState(null);

  useEffect(() => {
    loadCookies();
    loadBannerTexts();
  }, []);

  const loadCookies = async () => {
    const response = await fetchData("cookies", lang);
    if (response.status === 200) {
      setCookies(response.data.cookies);
    } else {
      console.log(response);
    }
  };

  const loadBannerTexts = async () => {
    const response = await fetchData("global", lang);
    if (response.status === 200) {
      setBannerTexts(response.data.global.cookieBanner);
    } else {
      console.log(response);
    }
  };

  const handleClick = (e, isYes) => {
    e.preventDefault();
    const cookieCodes = {};
    cookies.forEach((cookie) => {
      if (cookie.editable) {
        cookieCodes[cookie.code] = isYes;
      } else {
        cookieCodes[cookie.code] = true;
      }
    });
    saveCookies(cookieCodes);
    setVisible(false);
  };

  if (functionalCookieEnabled()) {
    return null;
  }

  if (!visible) {
    return null;
  }

  if (!cookies || !bannerTexts) {
    return null;
  }

  return (
    <div className="cookie-banner-wrapper">
      <div className="row align-items-center">
        <div className="col-12">
          <p className="cookie-banner-text mb-0">{bannerTexts.textMain}</p>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12 text-center">
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
            onClick={(e) => setVisible(false)}
            data-toggle="modal"
            data-target={`#cookies-modal`}
            className="cookie-banner-button secondary"
          >
            <i className="fa fa-edit" />
            <span>{bannerTexts.customize}</span>
          </a>
        </div>
      </div>
      <hr className="cookie-banner-divider" />
      <div className="text-center">
        <a
          className="cookie-link"
          href="#!"
          onClick={(e) => e.preventDefault()}
          data-toggle="modal"
          data-target={`#privacy-policy-modal`}
        >
          Privacy Policy
        </a>
        {" - "}
        <a
          className="cookie-link"
          href="#!"
          onClick={(e) => e.preventDefault()}
          data-toggle="modal"
          data-target={`#cookie-policy-modal`}
        >
          Cookie Policy
        </a>
      </div>
    </div>
  );
}
