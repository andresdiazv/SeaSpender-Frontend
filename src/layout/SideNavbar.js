import React from "react";
import "../App.css"; // Import App.css

const SideNavbar = () => {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar side-navbar">
      {" "}
      {/* Add the side-navbar class */}
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          {/* Add menu items as needed */}
          <li className="nav-item">
            <a className="nav-link" href="#"></a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideNavbar;
