import React, { useEffect, useState } from "react";
import useGlobalState from "../../lib/globalState";
import { fetchData } from "../../lib/data";

function HeroHome() {
  const { lang } = useGlobalState();
  const [homeTexts, setHomeTexts] = useState(null);
  const [socials, setSocials] = useState(null);

  useEffect(() => {
    loadHomeTexts();
    loadSocials();
  }, []);

  const loadHomeTexts = async () => {
    const response = await fetchData("global", lang);
    if (response.status === 200) {
      setHomeTexts(response.data.global.heroHome);
    } else {
      console.log(response);
    }
  };

  const loadSocials = async () => {
    const response = await fetchData("socials", null);
    if (response.status === 200) {
      setSocials(response.data.socials);
    } else {
      console.log(response);
    }
  };

  if (!homeTexts || !socials) {
    return null;
  }

  return (
    <section id="hero" className="hero-01 active">
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
