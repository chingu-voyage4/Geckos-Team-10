import React, { Component } from "react";
import Input from "../Input/Input";
import { withFormik, Form } from "formik";
import "./styles.css";

const InnerUser = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting
}) => (
  <Form onSubmit={handleSubmit} className="user-form">
    <div className="full-name-wrapper">
      <Input
        label="First Name"
        inputType="text"
        placeholder="First Name"
        name="first_name"
        onChange={handleChange}
        value={values.first_name}
      />
      <Input
        label="Last Name"
        inputType="text"
        placeholder="Last Name"
        name="last_name"
        onChange={handleChange}
        value={values.last_name}
      />
    </div>
    <Input
      label="Mobile Number"
      type="tel"
      placeholder="01-305-215-1234"
      icon="fas fa-mobile-alt"
      name="mobile_number"
      onChange={handleChange}
      value={values.mobile_number}
    />
    <Input
      label="Email"
      type="email"
      placeholder="email@example.com"
      icon="fas fa-envelope"
      name="email"
      onChange={handleChange}
      value={values.email}
    />
    <Input
      label="Password"
      type="password"
      placeholder="Use Fake Password"
      icon="fas fa-lock"
      name="password"
      onChange={handleChange}
      value={values.password}
    />
    <button
      type="submit"
      className="cta-join cta-sign-up"
      disabled={isSubmitting}
    >
      <span>SIGN UP</span>
      <i className="fas fa-arrow-right" />
    </button>
  </Form>
);

// withFormik HOC
const UserForm = withFormik({
  mapPropsToValues: props => ({
    first_name: "",
    last_name: "",
    mobile_number: "",
    email: "",
    password: ""
  }),
  handleSubmit: (values, { props, resetForm }) => {
    const { mutate } = props;
    // apollo mutate function
    mutate({ variables: { input: values } }).then(() => {
      // clear form of input values
      resetForm();
    });
  }
})(InnerUser);

export default UserForm;
