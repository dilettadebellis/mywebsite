import React from "react";

export default function () {
  return (
    <div id="count-up" className="count-up text-center box-border">
      <div className="row">
        <div className="col-6 col-lg-3 my-3 count-item ">
          <div className="count-icon">
            <i className="lni-download base-color" />
          </div>
          <div className="my-3">
            <span
              className="timer count-number"
              data-from="0"
              data-to="286"
              data-speed="5000"
            >
              0
            </span>
          </div>
          <p className="mb-0">Files Download</p>
        </div>

        <div className="col-6 col-lg-3 my-3 count-item ">
          <div className="count-icon">
            <i className="lni-pencil-alt base-color" />
          </div>
          <div className="my-3">
            <span
              className="timer count-number"
              data-from="0"
              data-to="6549"
              data-speed="5000"
            >
              0
            </span>
          </div>
          <p className="mb-0">Project Done</p>
        </div>

        <div className="col-6 col-lg-3 my-3 count-item ">
          <div className="count-icon">
            <i className="lni-medall  base-color" />
          </div>
          <div className="my-3">
            <span
              className="timer count-number"
              data-from="0"
              data-to="793"
              data-speed="5000"
            >
              0
            </span>
          </div>
          <p className="mb-0">Get Award</p>
        </div>

        <div className="col-6 col-lg-3 my-3 count-item ">
          <div className="count-icon">
            <i className="lni-emoji-smile base-color" />
          </div>
          <div className="my-3">
            <span
              className="timer count-number"
              data-from="0"
              data-to="286"
              data-speed="5000"
            >
              0
            </span>
          </div>
          <p className="mb-0">Happy Client</p>
        </div>
      </div>
    </div>
  );
}
