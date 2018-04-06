import React from "react";
import UserForm from "../components/UserForm/UserForm";
import signupLogo from "../images/signup_logo.svg";
import { Mutation } from "react-apollo";
import { NEW_USER } from "../graphql/queries";

const SignUp = () => (
  <main style={styles.main}>
    <img
      src={signupLogo}
      style={styles.logo}
      alt="grill with vegetables and pork"
    />
    <Mutation mutation={NEW_USER}>
      {createUser => <UserForm mutate={createUser} />}
    </Mutation>
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
