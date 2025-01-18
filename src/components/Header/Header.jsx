import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
  const navigationLinks = [
    { label: "Home", Path: "/" },
    { label: "WishList", Path: "/wishlist" },
    { label: "About", Path: "/about" },
  ];

  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileSidebar(!showMobileSidebar);
  };

  const handleItemClick = () => {
    setShowMobileSidebar(false); // Close the menu after clicking a link
  };

  return (
    <header>
      <nav>
        <div className="navtop">
          <h3>
            <Link
              to="/"
              className="project-title"
              onClick={() => setShowMobileSidebar(false)}
            >
              Virtual Spot
            </Link>
          </h3>
          <div
            className={`mobile-menu-icon ${showMobileSidebar ? "active" : ""}`}
            onClick={toggleMobileMenu}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <ul className="desktop-nav">
          {navigationLinks.map((items, key) => (
            <li key={key} onClick={handleItemClick}>
              <Link to={items.Path}>{items.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <ul className={`mobile-nav ${showMobileSidebar ? "show" : ""}`}>
        {navigationLinks.map((items, key) => (
          <li key={key} onClick={handleItemClick}>
            <Link to={items.Path}>{items.label}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
