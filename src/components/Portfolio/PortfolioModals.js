import React from "react";
import PortfolioSingleModal from "./PortfolioSingleModal";
import useGlobalState from "../../lib/globalState";

export default function () {
  const { texts } = useGlobalState();
  const works = texts.works.works;

  return works.map((work, index) => (
    <PortfolioSingleModal
      key={index}
      {...work}
      modalId={`single-portfolio-modal-${index}`}
    />
  ));
}
