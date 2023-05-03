import React from "react";
import { useState } from "react";
import "../assets/Goals.css";

const Goals = () => {
  const goals = [
    {
      id: 1,
      title: "Save for a vacation",
      currentAmount: 1800,
      targetAmount: 2000,
    },
    {
      id: 2,
      title: "Pay off student loan",
      currentAmount: 1500,
      targetAmount: 6000,
    },
    {
      id: 3,
      title: "Build an emergency fund",
      currentAmount: 1000,
      targetAmount: 5000,
    },
  ];

  const GoalsList = ({ goals }) => {
    const [selectedGoalIndex, setSelectedGoalIndex] = useState(0);

    const handlePreviousClick = () => {
      setSelectedGoalIndex((prevIndex) =>
        prevIndex === 0 ? goals.length - 1 : prevIndex - 1
      );
    };

    const handleNextClick = () => {
      setSelectedGoalIndex((prevIndex) =>
        prevIndex === goals.length - 1 ? 0 : prevIndex + 1
      );
    };

    return (
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h4 style={{ fontWeight: "normal" }}>Goals</h4>
          {goals.length > 1 && (
            <div style={{ marginLeft: "auto" }}>
              <button onClick={handlePreviousClick}>&lt;</button>
              <button onClick={handleNextClick}>&gt;</button>
            </div>
          )}
        </div>
        {goals.map((goal, index) => (
          <div
            key={goal.id}
            className="goal-container"
            style={{
              display: index === selectedGoalIndex ? "block" : "none",
            }}
          >
            <h5 style={{ fontWeight: "normal" }}>{goal.title}</h5>
            <div className="progress-wrapper">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: `${(goal.currentAmount / goal.targetAmount) * 100}%`,
                  }}
                  aria-valuenow={goal.currentAmount}
                  aria-valuemin="0"
                  aria-valuemax={goal.targetAmount}
                ></div>
              </div>
              <div className="goal-text">
                {Math.floor((goal.currentAmount / goal.targetAmount) * 100)}%
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <GoalsList goals={goals} />
    </div>
  );
};

export default Goals;
