import React from "react";
import "./Challenge.style.css";

export const Challenge = ({ name, image, domains }) => {
  return (
    <div className="challenge-body">
      <div className="challenge-container">
        <div className="challenge-card">
          <div className="challenge-image">
            <img src={image} alt="header-smth" />
          </div>
          <div className="challenge-content">
            <h3>{name}</h3>
            {domains}
          </div>
        </div>
      </div>
    </div>
  );
};
