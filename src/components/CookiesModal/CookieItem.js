import React, { useEffect, useState } from "react";

export default function CookieItem({
  code,
  title,
  editable,
  description,
  addEnabledCookie,
  removeEnabledCookie,
}) {
  const [isEnabled, setIsEnabled] = useState(true);
  const [descIsOpen, setDescIsOpen] = useState(false);

  useEffect(() => {
    addEnabledCookie(code);
  }, []);

  const handleChange = () => {
    if (isEnabled) {
      // it will be false, we remove the cookie

      removeEnabledCookie(code);
    } else {
      addEnabledCookie(code);
    }
    setIsEnabled(!isEnabled);
  };

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
              onChange={handleChange}
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
