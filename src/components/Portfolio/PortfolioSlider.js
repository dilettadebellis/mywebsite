import React from "react";
import { defaultMainImage } from "../../data/en_GB/works";

const PortfolioSlider = ({ images, modalId, name }) => {
  return (
    <div
      id={`portfolio-slider-${modalId}`}
      className="carousel slide"
      data-ride="carousel"
    >
      {images.length > 1 ? (
        <ol className="carousel-indicators">
          {images.map((image, index) => (
            <li
              key={index}
              data-target={`#portfolio-slider-${modalId}`}
              data-slide-to={index}
              className={`${index === 0 ? "active" : ""}`}
            />
          ))}
        </ol>
      ) : null}
      <div className="carousel-inner">
        {images.length > 1 ? (
          images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img src={image} className="d-block" alt={name} />
            </div>
          ))
        ) : images.length === 0 ? (
          <img src={defaultMainImage} className="d-block" alt={name} />
        ) : (
          <img src={images[0]} className="d-block" alt={name} />
        )}
      </div>
    </div>
  );
};

export default PortfolioSlider;
