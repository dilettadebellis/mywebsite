import React from "react";
import PortfolioSingleModal from "./PortfolioSingleModal";
import { works } from "../../data/works";

export default function () {
  return works.map((work, index) => (
    <PortfolioSingleModal
      {...work}
      modalId={`single-portfolio-modal-${index}`}
    />
  ));
}
