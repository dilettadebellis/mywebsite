import React from "react";
import ServiceItem from "./ServiceItem";
import useGlobalState from "../../../lib/globalState";

export default function () {
  const { texts } = useGlobalState();
  const servicesGlobal = texts.global.heroAbout.services;
  const services = texts.services.services;
  return (
    <div className="services">
      <div className="row mt-5 ">
        <div className="col-12">
          <h3 className="mb-0 text-dark">
            {servicesGlobal.titleWhite}{" "}
            <span className="base-color">{servicesGlobal.titlePink}</span>
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
