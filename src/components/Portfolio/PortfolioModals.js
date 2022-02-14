import React, { useEffect, useState } from "react";
import PortfolioSingleModal from "./PortfolioSingleModal";
import useGlobalState from "../../lib/globalState";
import { fetchData } from "../../lib/data";

export default function PortfolioModals() {
  const { lang } = useGlobalState();
  const [works, setWorks] = useState(null);

  useEffect(() => {
    loadWorks();
  }, []);

  const loadWorks = async () => {
    const response = await fetchData("works", lang);
    if (response.status === 200) {
      setWorks(response.data.works);
    } else {
      console.log(response);
    }
  };

  if (!works) {
    return null;
  }

  return works.map((work, index) => (
    <PortfolioSingleModal
      key={index}
      {...work}
      modalId={`single-portfolio-modal-${index}`}
    />
  ));
}
