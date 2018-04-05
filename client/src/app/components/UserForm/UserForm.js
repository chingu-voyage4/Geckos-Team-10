import React, { Component } from "react";
import Import from "../Input/Input";

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

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // todo: onSubmit handler
  onSubmit = e => {
    alert("hello");
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <Input
            label="First Name"
            inputType="text"
            placeholder="First Name"
            name="first_name"
            onChange={this.handleChange}
            value={this.state.user.first_name}
          />
          <Input
            label="Last Name"
            inputType="text"
            placeholder="Last Name"
            name="last_name"
            onChange={this.handleChange}
            value={this.state.user.last_name}
          />
        </div>
        <Input
          label="Mobile Number"
          type="tel"
          placeholder="01-123-555-1234"
          icon="fas fa-mobile-alt"
          name="mobile_number"
          onChange={this.handleChange}
          value={this.state.user.mobile_number}
        />
        <Input
          label="Email"
          type="email"
          placeholder="email@example.com"
          icon="fas fa-envelope"
          name="email"
          onChange={this.handleChange}
          value={this.state.user.email}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Use Fake Password"
          icon="fas fa-lock"
          name="password"
          onChange={this.handleChange}
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
