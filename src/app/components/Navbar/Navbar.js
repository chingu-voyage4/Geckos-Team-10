import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => (
  <header className="nav">
    <Menu>
      <li>
        <Link to="/how-to-grill">How to Grill</Link>
      </li>
      <li>
        <Link to="/pricing">Pricing</Link>
      </li>
      <li>
        <Link to="/book-a-grill">Book a Grill</Link>
      </li>
    </Menu>
    <nav className="nav-item-list">
      <ul className="nav-link-list">
        <li className="nav-link">
          <Link to="/how-to-grill">How to Grill</Link>
        </li>
        <li className="nav-link">
          <Link to="/pricing">Pricing</Link>
        </li>
        <li className="nav-link">
          <Link to="/book-a-grill">Book a Grill</Link>
        </li>
      </ul>
      <li className="nav-brand">
        <Link to="/">GrillBer</Link>
      </li>
      <li className="btn-cta">
        <Link to="/sign-up">Sign Up</Link>
      </li>
    </nav>
  </header>
);

export default Navbar;
