import React from "react";

export default function LangSkillItem({ name, comment, value }) {
  let starValues = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= value) {
      starValues.push(1);
    } else {
      if (Math.abs(i - value) === 0.5) {
        starValues.push(0.5);
      } else {
        starValues.push(0);
      }
    }
  }

  return (
    <div className="language-skill row">
      <h4 className="col-6 text-left mb-0">
        {name} <span> {comment}</span>
      </h4>
      <ul className="col-6 list-inline text-right mb-0">
        {starValues.map((star, index) => {
          let iconClass = "fa";
          if (star === 1) {
            iconClass += " fa-star";
          } else if (star === 0.5) {
            iconClass += " fa-star-half-empty";
          } else {
            iconClass += " fa-star-o";
          }
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
