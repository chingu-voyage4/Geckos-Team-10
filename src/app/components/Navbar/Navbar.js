import React from 'react'
import { slide as Menu } from "react-burger-menu"; 
import './styles.css'; 

const Navbar = () => (
  <header className="nav">
    <Menu>
      <li><a>How to Grill</a></li>
      <li><a>Pricing</a></li>
      <li><a>Book a Grill</a></li>  
    </Menu>
    <ul className="nav-item-list">
        <li className="nav-brand">
          <a href="">GrillBer</a>
        </li>
        <li className="btn-cta">
          <a href="">Sign Up</a>
        </li>
    </ul>
  </header>
)

export default Navbar; 