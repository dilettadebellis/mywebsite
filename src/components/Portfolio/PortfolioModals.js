import React from "react";
import PortfolioSingleModal from "./PortfolioSingleModal";
import { useEntityAllData } from "../../lib/hooks/data/entities";

export default function PortfolioModals() {
  const works = useEntityAllData("works");

  if (!works) {
    return null;
  }

  return works.map((work, index) => (
    <PortfolioSingleModal
      key={index}
      {...work}
      longName={work.longName.split("*|*")}
      modalId={`single-portfolio-modal-${index}`}
    />
  ));
}
