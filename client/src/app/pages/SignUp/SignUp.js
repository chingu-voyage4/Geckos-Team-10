import React from "react";
import UserForm from "../../components/UserForm/UserForm";
import signupLogo from "../../images/signup_logo.svg";
import { Mutation } from "react-apollo";
import { NEW_USER } from "../../graphql/queries";
import "./styles.css";

const SignUp = ({ history }) => (
  <main className="su-main-container">
    <img
      src={signupLogo}
      className="su-logo"
      alt="grill with vegetables and pork"
    />
    <Mutation mutation={NEW_USER}>
      {createUser => <UserForm mutate={createUser} history={history} />}
    </Mutation>
    <p className="su-terms">
      By clicking "Sign Up", you agree to Grillber's Terms and Conditions and
      Privacy Policy.
    </p>
  </main>
);

export default SignUp;
