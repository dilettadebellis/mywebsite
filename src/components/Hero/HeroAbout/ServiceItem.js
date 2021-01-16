import React from "react";

function ServiceItem({ name, description, icon }) {
  return (
    <div className="col-lg-4 text-left">
      <div className="services-item box-hover-border">
        <div className="float-left mt-lg-1 d-inline-block services-icon">
          <i className={`${icon} size-md base-color`} />
        </div>
        <div className="services-content">
          <h5 className="mb-3">{name}</h5>
          <p className="text-muted mb-0">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;
