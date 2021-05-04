import React from "react";

const Footer = () => {
  return (
    <div className="row footer-wrapper">
      <div className="col-12 text-center">
        <p>
          Copyright © {new Date().getFullYear()}{" "}
          <span className="base-color">Diletta De Bellis</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
