import React from "react";
import "../assets/Navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark top-navbar">
        {" "}
        {/* Add the top-navbar class */}
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="/sea-spender.png" // Update the image src
              alt="Logo"
              className="logo-img" // Add a class name for the logo
            />
          </a>
          {/* Removed the separate div for the logo */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  );
}
