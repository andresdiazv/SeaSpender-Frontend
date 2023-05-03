import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Character from "./components/Character";
import Goals from "./components/Goals";
import Spending from "./components/Spending";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Character />
      <div className="float-container">
        <div className="float-child">
          <Goals />
        </div>
        <div className="float-child">
          <Spending />
        </div>
      </div>
    </div>
  );
}

export default App;
