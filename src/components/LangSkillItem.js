import React from "react";

export default function ({ name, comment, value }) {
  return (
    <div className="language-skill row">
      <h4 className="col-6 text-left mb-0">
        {name} <span> {comment}</span>
      </h4>
      <ul className="col-6 list-inline text-right mb-0">
        {value.map((star, index) => {
          let iconClass = "fa";
          if (star === 1) {
            iconClass += " fa-star";
          } else if (star === 0.5) {
            iconClass += " fa-star-half-empty";
          } else {
            iconClass += " fa-star-o";
          }
          console.log(iconClass);
          return (
            <li key={index} className="list-inline-item">
              <i className={iconClass} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
