import React from "react";
import useGlobalState from "../../../lib/globalState";

export default function () {
  const { texts } = useGlobalState();
  const aboutInfoTexts = texts.global.heroAbout.aboutInfo;

  const now = new Date();
  const startExp = new Date("2013-01-01");

  return (
    <div id="count-up" className="count-up text-center box-border">
      <div className="row">
        <div className="col-6 col-lg-3 my-3 count-item ">
          <div className="count-icon">
            <i className="lni-coffee-cup base-color" />
          </div>
          <div className="my-3">
            <span
              className="timer count-number"
              data-from="0"
              data-to="3460"
              data-speed="2000"
            >
              0
            </span>
          </div>
          <p className="mb-0">{aboutInfoTexts.cappuccinosConsumed}</p>
        </div>

        <div className="col-6 col-lg-3 my-3 count-item ">
          <div className="count-icon">
            <i className="lni-pencil-alt base-color" />
          </div>
          <div className="my-3">
            <span
              className="timer count-number"
              data-from="0"
              data-to="100"
              data-speed="2000"
            >
              0
            </span>
          </div>
          <p className="mb-0">{aboutInfoTexts.projectsDone}</p>
        </div>

        <div className="col-6 col-lg-3 my-3 count-item ">
          <div className="count-icon">
            <i className="lni-timer  base-color" />
          </div>
          <div className="my-3">
            <span
              className="timer count-number"
              data-from="0"
              data-to={now.getFullYear() - startExp.getFullYear()}
              data-speed="2000"
            >
              0
            </span>
          </div>
          <p className="mb-0">{aboutInfoTexts.yearsOfExperience}</p>
        </div>

        <div className="col-6 col-lg-3 my-3 count-item ">
          <div className="count-icon">
            <i className="lni-emoji-smile base-color" />
          </div>
          <div className="my-3">
            <span
              className="timer count-number"
              data-from="0"
              data-to="18000"
              data-speed="2000"
            >
              0
            </span>
          </div>
          <p className="mb-0">{aboutInfoTexts.hoursWorked}</p>
        </div>
      </div>
    </div>
  );
}
