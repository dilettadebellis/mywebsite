import React, { useEffect, useState } from "react";
import ServiceItem from "./ServiceItem";
import useGlobalState from "../../../lib/globalState";
import { fetchData } from "../../../lib/data";

export default function Services() {
  const { lang } = useGlobalState();
  const [servicesGlobal, setServicesGlobal] = useState(null);
  const [services, setServices] = useState(null);

  useEffect(() => {
    loadServicesGlobal();
    loadServices();
  }, []);

  const loadServicesGlobal = async () => {
    const response = await fetchData("global", lang);
    if (response.status === 200) {
      setServicesGlobal(response.data.global.heroAbout.services);
    } else {
      console.log(response);
    }
  };

  const loadServices = async () => {
    const response = await fetchData("services", lang);
    if (response.status === 200) {
      setServices(response.data.services);
    } else {
      console.log(response);
    }
  };

  if (!servicesGlobal || !services) {
    return null;
  }

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
