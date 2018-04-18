import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./styles.css";

class Navbar extends React.Component {
  state = {
    menuOpen: false
  };
  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }
  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    return (
      <header className="nav">
        <Menu
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
        >
          <li>
            <Link to="/how-to-grill" onClick={() => this.closeMenu()}>
              How to Grill
            </Link>
          </li>
          <li>
            <Link to="/pricing" onClick={() => this.closeMenu()}>
              Pricing
            </Link>
          </li>
          <li>
            <Link to="auth/book-a-grill" onClick={() => this.closeMenu()}>
              Book a Grill
            </Link>
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
              <Link to="auth/book-a-grill">Book a Grill</Link>
            </li>
          </ul>
          <li className="nav-brand">
            <Link to="/">Grillber</Link>
          </li>
          <li className="btn-cta">
            <Link to="/sign-up">Sign Up</Link>
          </li>
        </nav>
      </header>
    );
  }
}

export default Navbar;
