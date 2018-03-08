import React from 'react'
import { slide as Menu } from "react-burger-menu"; 

const Navbar = () => (
  <header className="nav">
    <Menu>
      <li><a>How to Grill</a></li>
      <li><a>Pricing</a></li>
      <li><a>Book a Grill</a></li>  
    </Menu>
    <ul className="nav-item-list">
        <li className="nav-brand">
            <a>GrillBer</a>
        </li>
        <li>
            <button className="btn-cta">
            <a>Sign Up</a>
            </button>
        </li>
    </ul>
  </header>
)

export default Navbar; 