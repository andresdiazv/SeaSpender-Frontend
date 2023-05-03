import React from "react";
import characterImage from "../assets/orange-fish.png";
import "../assets/Character.css";

const Character = () => {
  const level = 1;
  const exp = 0;
  const maxExp = 100;

  const expPercentage = (exp / maxExp) * 100;

  return (
    <div className="character-container">
      <div className="level-progress-bar">
        <div className="level-info">Level {level}</div>
        <div className="progress-wrapper">
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${expPercentage}%` }}
              aria-valuenow={exp}
              aria-valuemin="0"
              aria-valuemax={maxExp}
            ></div>
          </div>
          <div className="exp-text"> {exp}/{maxExp} EXP </div>
        </div>
      </div>
      <div className="character-image centered">
        <img src={characterImage} alt="Character" />
      </div>
    </div>
  );
};

export default Character;
