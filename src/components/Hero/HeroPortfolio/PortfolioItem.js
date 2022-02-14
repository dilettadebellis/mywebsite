import React, { useState } from "react";

export default function PortfolioItem({
  name,
  coverImage,
  filters,
  modalId,
  defaultCoverImage,
}) {
  return (
    <div className={`col-lg-4 portfolio-item ${filters.join(" ")}`}>
      <div className="image-border">
        <div className="portfolio-item-content">
          <img
            src={coverImage.length > 0 ? coverImage : defaultCoverImage}
            alt={name}
            className="img-fluid"
          />
          <div className="img-overlay text-center">
            <div className="img-overlay-content">
              <div className="portfolio-icon">
                <a
                  href=""
                  onClick={(e) => e.preventDefault()}
                  type="button"
                  data-toggle="modal"
                  data-target={`#${modalId}`}
                >
                  <i className="lni-link" />
                </a>
                {/*<a
                  href="https://placehold.co/600x450"
                  className="js-zoom-gallery"
                >
                  <i className="lni-search" />
                </a>*/}
              </div>
              <h5 className="mt-3 mb-0">{name}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
