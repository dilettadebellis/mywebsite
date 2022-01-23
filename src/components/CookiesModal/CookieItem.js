import React, { useState } from "react";

export default function CookieItem({ code, title, editable, description }) {
  const [isEnabled, setIsEnabled] = useState(true);
  const [descIsOpen, setDescIsOpen] = useState(false);

  return (
    <div className="cookie-item">
      <div className="control-wrapper">
        <h5 className="base-color cookie-item-title">{title}</h5>
        {editable ? (
          <div className="custom-control custom-switch">
            <input
              type="checkbox"
              className="custom-control-input"
              id={`${code}-enabled`}
              checked={isEnabled}
              onChange={() => setIsEnabled(!isEnabled)}
            />
            <label
              className="custom-control-label"
              htmlFor={`${code}-enabled`}
            />
          </div>
        ) : null}
        <i
          className={
            descIsOpen
              ? "fa fa-angle-up cookie-item-controller"
              : "fa fa-angle-down cookie-item-controller"
          }
          onClick={() => setDescIsOpen(!descIsOpen)}
        />
      </div>
      <div
        className={
          descIsOpen ? "cookie-item-content active" : "cookie-item-content"
        }
      >
        {description}
      </div>
    </div>
  );
}
