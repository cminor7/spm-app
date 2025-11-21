import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import type { NavItem } from "./Types";
import "../css/NavBar.css";

interface Props {
  items: NavItem[];
  logoText?: string;
}

const NavBar: React.FC<Props> = ({ items, logoText = "" }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="navbar">
      <div className="navbar-logo">{logoText}</div>

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
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
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
                    <NavLink
                      to={child.path!}
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
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
