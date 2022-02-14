import React, { useEffect, useState } from "react";
import { downloadFile, getAge } from "../../../utils";
import useGlobalState from "../../../lib/globalState";
import { fetchData } from "../../../lib/data";

export default function CVInfo() {
  const { lang } = useGlobalState();
  const [cvTexts, setCvTexts] = useState(null);

  useEffect(() => {
    loadCvTexts();
  }, []);

  const loadCvTexts = async () => {
    const response = await fetchData("global", lang);
    if (response.status === 200) {
      setCvTexts(response.data.global.heroAbout.cvInfo);
    } else {
      console.log(response);
    }
  };

  if (!cvTexts) {
    return null;
  }

  const downloadCV = (e) => {
    e.preventDefault();
    downloadFile("downloads/cv.pdf", "diletta-de-bellis.pdf");
  };

  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="text-center title">
          <h2 className="text-dark">
            {cvTexts.about} <span className="base-color">{cvTexts.me}</span>
          </h2>
          <p className="text-muted max-width-450 mb-5">
            {cvTexts.descriptionShort}
          </p>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="image-border">
          <img src="/assets/img/custom/diletta-de-bellis-03.jpg" alt="/" />
        </div>
      </div>
      <div className="col-lg-6 mt-4 mt-lg-0">
        <div className="personal-item ">
          <h3 className="text-dark mt-4 mt-lg-0">
            <span className="base-color">{cvTexts.jobNamePink}</span>{" "}
            {cvTexts.jobNameWhite}
          </h3>
          <div className="row">
            <div className="col-6 personal-info">
              <ul className="list-unstyled pt-4">
                <li>
                  <p>
                    {cvTexts.birthday}: <span> {cvTexts.birthdayDay}</span>
                  </p>
                </li>
                <li>
                  <p>
                    {cvTexts.website}:{" "}
                    <a href="www.webfondente.com">
                      <span> {cvTexts.websiteValue}</span>
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    {cvTexts.phone}: <span> {cvTexts.phoneValue}</span>
                  </p>
                </li>
                <li>
                  <p>
                    {cvTexts.city}: <span>{cvTexts.cityValue}</span>
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-6 personal-info">
              <ul className="list-unstyled pt-4">
                <li>
                  <p>
                    {cvTexts.age}: <span> {getAge("1992-11-18")}</span>
                  </p>
                </li>
                <li>
                  <p>
                    {cvTexts.degree}: <span> {cvTexts.degreeValue}</span>
                  </p>
                </li>
                <li>
                  <p>
                    {cvTexts.mail}:{" "}
                    <a href="mailto:hello@dilettadebellis.it">
                      <span> hello@dilettadebellis.it</span>
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    {cvTexts.freelence}: <span> {cvTexts.freelenceValue}</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="button-border mt-3 mb-lg-0 mr-4">
          <a onClick={downloadCV} className="pill-button">
            {cvTexts.downloadCV}
          </a>
        </div>
        <div className="button-border mt-3 mb-lg-0 to-contact">
          <a href="#contact" className="pill-button">
            {cvTexts.hireMe}
          </a>
        </div>
      </div>
    </div>
  );
}
