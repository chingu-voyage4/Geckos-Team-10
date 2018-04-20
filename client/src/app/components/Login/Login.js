import React from "react";
import Input from "../Input/Input";
import { withFormik, Form } from "formik";
import Yup from "yup";
import "./styles.css";

const innerLogin = ({
  // these are props passed from withFormik HOC
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  touched,
  errors
}) => (
  <Form onSubmit={handleSubmit} className="login-form">
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
      <span>LOGIN</span>
      <i className="fas fa-arrow-right" />
    </button>
  </Form>
);

// withFormik HOC
const LoginForm = withFormik({
  mapPropsToValues: props => ({
    email: "",
    password: ""
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required!"),
    password: Yup.string()
      .min(8, "you need 8 characters..please")
      .required("you need a password")
  }),
  handleSubmit: async (values, { props, resetForm }) => {
    try {
      const response = await props.mutate({
        variables: values
      });
      const { token, refreshToken } = response.data.login;
      localStorage.setItem("token", token);
      localStorage.setItem("refreshToken", refreshToken);
      resetForm();
      props.history.push("/auth/book-a-grill");
    } catch (e) {
      alert(
        "maybe you had a wrong email or password, it already exists, or you haven't signed up yet"
      );
    }
  }
})(innerLogin);

export default LoginForm;
