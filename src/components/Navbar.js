import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  let activeStyle = {
    color: "black",
  };

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="nav__link"
            to="/regular"
          >
            Memy
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="nav__link"
            to="/hot"
          >
            Hot Memy
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="nav__link"
            to="/create-meme"
          >
            Stwórz mema
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
