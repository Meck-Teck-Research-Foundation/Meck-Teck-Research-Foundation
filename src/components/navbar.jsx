import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ onNavigate }) => {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");
  const navToggle = () => {
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu");

    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };
  /* */
  return (
    <nav className="nav">
      <img src="logo.jpeg" alt="logo" class="logo" />
      <a href="#" className="nav__brand">
        MECK TECK RESEARCH FOUNDATION
      </a>
      <img src="favicon1.jpeg" alt="logo" class="logo" />
      <ul className={active}>
        <li className="nav__item">
          <Link to="/" className="nav__link" onClick={() => onNavigate("home")}>
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="service"
            className="nav__link"
            onClick={() => onNavigate("service")}
          >
            Service
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/journey"
            className="nav__link"
            onClick={() => onNavigate("journey")}
          >
            Journey
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/contact"
            className="nav__link"
            onClick={() => onNavigate("contact")}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};
export default Navbar;
