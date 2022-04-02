import React, { useEffect, useState } from "react";
import {
  useEntityAllData,
  useEntitySingleRowData,
} from "../../lib/hooks/data/entities";
import useGlobalState from "../../lib/globalState";
import { capitalize } from "../../utils";

function HeroHome() {
  const { themeColor, screenMode } = useGlobalState();
  const homeTexts = useEntitySingleRowData("global_heroHome");
  const globalPhotos = useEntitySingleRowData("global_photos");
  const socials = useEntityAllData("socials");
  const [currentHeroImage, setCurrentHeroImage] = useState(null);

  useEffect(() => {
    if (globalPhotos) {
      const color = themeColor === "dark" ? "Black" : "White";
      setCurrentHeroImage(
        globalPhotos[`heroHome${capitalize(screenMode)}${color}`]
      );
    }
  }, [themeColor, screenMode, globalPhotos]);

  if (!homeTexts || !socials) {
    return null;
  }

  return (
    <section
      id="hero"
      className="hero-01 active"
      style={{
        background: ` url("${process.env.REACT_APP_IMAGES_BASE_PATH}${currentHeroImage}")`,
      }}
    >
      <div className="display-table">
        <div className="display-content">
          <div className="container">
            <div className="row justify-content-center hero-item">
              <div className="col-lg-12">
                <div className="hero-content">
                  <h1 className="mb-3">
                    {homeTexts.im}{" "}
                    <span className="base-color"> Diletta De Bellis</span>
                  </h1>
                  <h4 className="text-capitalize mb-0">
                    <span className="base-color">{homeTexts.a} </span>{" "}
                    <span
                      className="element"
                      data-elements={homeTexts.definition}
                    />
                  </h4>
                  <p className="max-width-450 mx-0 my-4">
                    {homeTexts.description}
                  </p>
                  <ul className="list-inline hero-social">
                    {socials.map((social, index) => (
                      <li key={index} className="list-inline-item">
                        <a
                          href={social.url}
                          title={social.title}
                          target="_blank"
                        >
                          <i className={`fa ${social.icon}`} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
