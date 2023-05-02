import React from "react";
import characterImage from "../assets/character-image.jpg"; // Import your character image here

const Character = () => {
  const level = 1;
  const exp = 50;
  const maxExp = 100;

  const expPercentage = (exp / maxExp) * 100;

  return (
    <div className="character-container">
      <div className="level-progress-bar">
        <div className="level-info">Level {level}</div>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${expPercentage}%` }}
            aria-valuenow={exp}
            aria-valuemin="0"
            aria-valuemax={maxExp}
          >
            {exp}/{maxExp} EXP
          </div>
        </div>
      </div>
      <div className="character-image">
        <img src={characterImage} alt="Character" />
      </div>
    </div>
  );
};

export default Character;
