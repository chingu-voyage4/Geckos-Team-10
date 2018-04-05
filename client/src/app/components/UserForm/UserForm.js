import React, { Component } from "react";
import Input from "../Input/Input";
import "./styles.css";

class UserForm extends Component {
  state = {
    user: {
      first_name: "",
      last_name: "",
      mobile_number: "",
      email: "",
      password: ""
    }
  };

  handleChange = propertyName => e => {
    const { user } = this.state;
    const newUser = {
      ...user,
      [propertyName]: e.target.value
    };
    this.setState({ user: newUser });
  };

  // todo: onSubmit handler
  onSubmit = e => {
    alert("hello");
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="user-form">
        <div className="full-name-wrapper">
          <Input
            label="First Name"
            inputType="text"
            placeholder="First Name"
            name="first_name"
            onChange={this.handleChange("first_name")}
            value={this.state.user.first_name}
          />
          <Input
            label="Last Name"
            inputType="text"
            placeholder="Last Name"
            name="last_name"
            onChange={this.handleChange("last_name")}
            value={this.state.user.last_name}
          />
        </div>
        <Input
          label="Mobile Number"
          type="tel"
          placeholder="01-123-555-1234"
          icon="fas fa-mobile-alt"
          name="mobile_number"
          onChange={this.handleChange("mobile_number")}
          value={this.state.user.mobile_number}
        />
        <Input
          label="Email"
          type="email"
          placeholder="email@example.com"
          icon="fas fa-envelope"
          name="email"
          onChange={this.handleChange("email")}
          value={this.state.user.email}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Use Fake Password"
          icon="fas fa-lock"
          name="password"
          onChange={this.handleChange("password")}
          value={this.state.user.password}
        />
        <button type="submit" className="cta-join cta-sign-up">
          <span>SIGN UP</span>
          <i className="fas fa-arrow-right" />
        </button>
      </form>
    );
  }
}

export default UserForm;
