import React from "react";
import { downloadFile } from "../../../utils";
import aboutMeImage from "../../../assets/img/diletta-de-bellis-03.jpg"

export default function () {
  const downloadCV = (e) => {
    e.preventDefault();
    downloadFile("downloads/cv.pdf", "diletta-de-bellis.pdf");
  };

  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="text-center title">
          <h2 className="text-dark">
            About <span className="base-color">Me</span>
          </h2>
          <p className="text-muted max-width-450 mb-5">
            In a professional context it often happens that private clients
            corder a publication to be made.
          </p>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="image-border">
          <img src={aboutMeImage} alt="/" />
        </div>
      </div>
      <div className="col-lg-6 mt-4 mt-lg-0">
        <div className="personal-item ">
          <h3 className="text-dark mt-4 mt-lg-0">
            <span className="base-color">Web Marketing</span> Consultant
          </h3>
          <div className="row">
            <div className="col-6 personal-info">
              <ul className="list-unstyled pt-4">
                <li>
                  <p>
                    Birthday : <span> 18 November 1992</span>
                  </p>
                </li>
                <li>
                  <p>
                    Website : <a href="www.webfondente.com "><span> www.webfondente.com</span></a>
                  </p>
                </li>
                <li>
                  <p>
                    Phone : <span> 333 928 2218</span>
                  </p>
                </li>
                <li>
                  <p>
                    City : <span> Ancona, Italy</span>
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-6 personal-info">
              <ul className="list-unstyled pt-4">
                <li>
                  <p>
                    Age : <span> 28</span>
                  </p>
                </li>
                <li>
                  <p>
                    Degree : <span> Master</span>
                  </p>
                </li>
                <li>
                  <p>
                    Mail : <a href="mailto:hello@dilettadebellis.it"><span> hello@dilettadebellis.it</span></a>
                  </p>
                </li>
                <li>
                  <p>
                    Freelance : <span> Available</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="button-border mt-3 mb-lg-0 mr-4">
          <a onClick={downloadCV} className="pill-button">
            Download Cv
          </a>
        </div>
        <div className="button-border mt-3 mb-lg-0 to-contact">
          <a href="#contact" className="pill-button">
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
}
