import React from "react";
import Input from "../Input/Input";
import { withFormik, Form } from "formik";
import Yup from "yup";
import "./styles.css";

const InnerUser = ({
  // these are props passed from withFormik HOC
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  touched,
  errors
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
        error={errors.first_name}
        touch={touched.first_name}
      />
      <Input
        label="Last Name"
        inputType="text"
        placeholder="Last Name"
        name="last_name"
        onChange={handleChange}
        value={values.last_name}
        error={errors.last_name}
        touch={touched.last_name}
      />
    </div>
    <Input
      label="Mobile Number"
      inputType="tel"
      placeholder="013052151234"
      icon="fas fa-mobile-alt"
      name="mobile_number"
      onChange={handleChange}
      value={values.mobile_number}
      error={errors.mobile_number}
      touch={touched.mobile_number}
    />
    <Input
      label="Email"
      inputType="email"
      placeholder="email@example.com"
      icon="fas fa-envelope"
      name="email"
      onChange={handleChange}
      value={values.email}
      error={errors.email}
      touch={touched.email}
    />
    <Input
      label="Password"
      inputType="password"
      placeholder="Use Fake Password"
      icon="fas fa-lock"
      name="password"
      onChange={handleChange}
      value={values.password}
      error={errors.password}
      touch={touched.password}
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
  validationSchema: Yup.object().shape({
    first_name: Yup.string().required("your first name please"),
    last_name: Yup.string().required("your last name, please"),
    mobile_number: Yup.string()
      .required("your number..please?")
      .min(10, "you need at least 10 digits")
      .max(12, "you can't have more than 12 digits")
      .matches(/^\d+$/, "only numbers please"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required!"),
    password: Yup.string()
      .min(8, "you need 8 characters..please")
      .required("you need a password")
  }),
  handleSubmit: (values, { props, resetForm }) => {
    const { mutate, history } = props;
    // apollo mutate function
    mutate({ variables: { input: values } }).then(() => {
      // clear form of input values
      resetForm();
      // go to thank-you page
      history.push("/thank-you");
    });
  }
})(InnerUser);

export default UserForm;
