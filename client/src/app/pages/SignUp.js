import React from "react";
import Input from "../components/Input/Input";
import UserForm from "../components/UserForm/UserForm";
import signupLogo from "../images/signup_logo.svg";

const SignUp = () => (
  <main styles={styles.main}>
    <img
      src={signupLogo}
      style={styles.logo}
      alt="grill with vegetables and pork"
    />
    <UserForm />
    <p style={styles.terms}>
      By clicking "Sign Up", you agree to Grillber's Terms and Conditions and
      Privacy Policy.
    </p>
  </main>
);

const styles = {
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "50px"
  },
  logo: {
    margin: "40px 0 20px 0",
    maxWidth: "100%"
  },
  terms: {
    fontSize: "13px",
    color: "black"
  }
};

export default SignUp;
