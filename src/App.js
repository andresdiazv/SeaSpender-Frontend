import React from "react";
import "./assets/App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Character from "./components/Character";

function App() {
  return (
    <div>
      <Navbar />
      <Character />
    </div>
  );
}

export default App;
