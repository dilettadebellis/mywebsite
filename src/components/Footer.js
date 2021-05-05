import React from "react";

const Footer = () => {
  return (
    <div className="row footer-wrapper">
      <div className="col-12 text-center">
        <p>
          Copyright © {new Date().getFullYear()}{" "}
          <span className="base-color">Diletta De Bellis</span>
          {" | "}
          <a
            className="footer-link"
            href="#!"
            onClick={(e) => e.preventDefault()}
            data-toggle="modal"
            data-target={`#privacy-policy-modal`}
          >
            Privacy Policy
          </a>
          {" - "}
          <a
            className="footer-link"
            href="#!"
            onClick={(e) => e.preventDefault()}
            data-toggle="modal"
            data-target={`#cookie-policy-modal`}
          >
            Cookie Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
