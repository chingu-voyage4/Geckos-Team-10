import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './styles.css';

const Navbar = () => (
  <header className="nav">
    <Menu>
      <li>
        <a href="">How to Grill</a>
      </li>
      <li>
        <a href="">Pricing</a>
      </li>
      <li>
        <a href="">Book a Grill</a>
      </li>
    </Menu>
    <nav className="nav-item-list">
      <ul className="nav-link-list">
          <li className="nav-link"><a href="">How to Grill</a></li>
          <li className="nav-link"><a href="">Pricing</a></li>
          <li className="nav-link"><a href="">Book a Grill</a></li>
      </ul>
      <li className="nav-brand">
        <a href="">GrillBer</a>
      </li>
      <li className="btn-cta">
        <a href="">Sign Up</a>
      </li>
    </nav>
  </header>
);

export default Navbar;
