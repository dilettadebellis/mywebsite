import React from "react";
import ServiceItem from "./ServiceItem";
import { services } from "../../../data/services";

export default function () {
  return (
    <div className="services">
      <div className="row mt-5 ">
        <div className="col-12">
          <h3 className="mb-0 text-dark">
            What <span className="base-color">I'm Doing</span>
          </h3>
        </div>
      </div>
      <div className="row">
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            name={service.name}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
}
