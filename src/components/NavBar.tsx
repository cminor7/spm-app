import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import type { NavBarProps } from "./Types";
import "../css/NavBar.css";


const NavBar: React.FC<NavBarProps> = ({ items, logoText = "", logo }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      {/* -------------- LOGO AREA (updated) ---------------- */}
      <div
        className="navbar-logo"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        {logo && (
          <img
            src={logo}
            alt="Logo"
            className="navbar-logo-img"
          />
        )}
        {logoText && <span>{logoText}</span>}
      </div>
      {/* --------------------------------------------------- */}

      <ul className="navbar-links">
        {items.map((item) => (
          <li
            key={item.label}
            className="nav-item"
            onMouseEnter={() => item.children && setOpenDropdown(item.label)}
            onMouseLeave={() => item.children && setOpenDropdown(null)}
          >
            {/* 1️⃣ TOGGLE SWITCH */}
            {item.isToggle ? (
              <div className="toggle-wrapper">
                <span className="toggle-text">{item.label}</span>

                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={item.toggleValue}
                    onChange={(e) => item.onToggle?.(e.target.checked)}
                  />
                  <span className="slider"></span>
                </label>
              </div>
            ) : item.isButton ? (
              /* 2️⃣ BUTTON */
              <button className="nav-button" onClick={item.onClick}>
                {item.label}
              </button>
            ) : item.path ? (
              /* 3️⃣ LINK */
              <NavLink to={item.path}>
                {item.label}
              </NavLink>
            ) : (
              /* 4️⃣ DROPDOWN LABEL */
              <span className="dropdown-label">{item.label}</span>
            )}

            {/* 5️⃣ DROPDOWN MENU */}
            {item.children && openDropdown === item.label && (
              <ul className="dropdown-menu">
                {item.children.map((child) => (
                  <li key={child.label}>
                    <NavLink to={child.path!}>
                      {child.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
