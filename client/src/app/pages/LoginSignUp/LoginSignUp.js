import React from "react";
import signupLogo from "../../images/signup_logo.svg";
import LoginForm from "../../components/Login/Login";
import UserForm from "../../components/UserForm/UserForm";
import { Mutation } from "react-apollo";
import { LOGIN_USER, NEW_USER } from "../../graphql/queries";
import { Link } from "react-router-dom";
import "./styles.css";

const LoginSignUp = props => {
  const _loginPg = props.match.path === "/login"; /* boolean */

  return (
    <main className="login-su-container">
      <img
        src={signupLogo}
        className="grillber-logo"
        alt="grill with vegetables and pork"
      />
      {_loginPg ? (
        <React.Fragment>
          <Mutation mutation={LOGIN_USER}>
            {login => <LoginForm mutate={login} history={props.history} />}
          </Mutation>
          <div className="login-su-cta-text-wrap">
            <p>If you don't have an acccount...</p>
            <div className="cta-login-su">
              <Link to="/sign-up">Sign Up Here</Link>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Mutation mutation={NEW_USER}>
            {createUser => (
              <UserForm mutate={createUser} history={props.history} />
            )}
          </Mutation>
          <p className="terms-conditions">
            By clicking "Sign Up", you agree to Grillber's Terms and Conditions
            and Privacy Policy.
          </p>
          <div className="login-su-cta-text-wrap">
            <p>If you already have an acccount...</p>
            <div className="cta-login-su">
              <Link to="/login">Login Here</Link>
            </div>
          </div>
        </React.Fragment>
      )}
      <div className="login-su-user-note">
        <p>
          NOTE: Don't worry, this is not a real app. We won't use or give away
          any of this information. As such, you have the liberty to use fake
          info in all form fields.
        </p>
      </div>
    </main>
  );
};

export default LoginSignUp;
