import React from "react";
import { downloadFile } from "../../../utils";

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
          <img src="https://placehold.co/690x460" alt="/" />
        </div>
      </div>
      <div className="col-lg-6 mt-4 mt-lg-0">
        <div className="personal-item ">
          <h3 className="text-dark mt-4 mt-lg-0">
            <span className="base-color">UI/UX</span> Designer & Web Developer
          </h3>
          <div className="row">
            <div className="col-6 personal-info">
              <ul className="list-unstyled pt-4">
                <li>
                  <p>
                    Birthday : <span> 1 April 1990</span>
                  </p>
                </li>
                <li>
                  <p>
                    Website : <span> www.retrina.com</span>
                  </p>
                </li>
                <li>
                  <p>
                    Phone : <span> +123 456 7890</span>
                  </p>
                </li>
                <li>
                  <p>
                    City : <span> New York, USA</span>
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-6 personal-info">
              <ul className="list-unstyled pt-4">
                <li>
                  <p>
                    Age : <span> 30</span>
                  </p>
                </li>
                <li>
                  <p>
                    Degree : <span> Master</span>
                  </p>
                </li>
                <li>
                  <p>
                    Mail : <span> sample@retrina.com</span>
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
