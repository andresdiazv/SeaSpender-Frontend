import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import SideNavbar from "./layout/SideNavbar";
import Character from "./components/Character";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <SideNavbar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 main-content">
            <Character />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
