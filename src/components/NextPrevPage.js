import React from "react";

export default function NextPrevPage() {
  return (
    <div className="next-prev-page">
      <button type="button" className="prev-page bg-base-color">
        <i className="fa fa-angle-up text-white" />
      </button>
      <button type="button" className="next-page bg-base-color mt-3">
        <i className="fa fa-angle-down text-white" />
      </button>
    </div>
  );
}
