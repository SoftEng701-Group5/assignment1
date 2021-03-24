import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import Button from "../components/global/Button";
import TextInput from "../components/global/TextInput";
import LoginImage from "../assets/images/LoginImage";

import { signIn } from "../services/authService";

/**
 * This component represents the login page,
 * and should contain all elements present in this page
 */
export default function LoginView() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Feedback strings to give user feedback, e.g. Missing email
  const [emailInfoText, setEmailInfoText] = useState("");
  const [passwordInfoText, setPasswordInfoText] = useState("");

  /**
   * Handles login process
   */
  const loginHandler = async () => {
    // Process inputs
    const processedEmail = email.trim();
    const processedPassword = password.trim();

    // Check if inputs have been provided, notify user it not
    let validLogin = true;
    if (!processedEmail) {
      setEmailInfoText("Please enter your email address");
      validLogin = false;
    }
    if (!processedPassword) {
      setPasswordInfoText("Please enter your password");
      validLogin = false;
    }

    if (validLogin) {
      // If authentication is successful, can go to /home
      if (await signIn(processedEmail, processedPassword)) {
        history.push("/home");
      } else {
        // If authentication is unsuccessful, notify user and reset inputs
        // eslint-disable-next-line no-alert
        alert("Invalid login");

        setPassword("");
      }
    }
  };

  return (
    <>
      <div className="login">
        <h1 className="login__welcome">Welcome</h1>
        <div className="email-container">
          <TextInput
            label="Email:"
            placeholderValue={emailInfoText}
            textValue={email}
            onChangeHandler={setEmail}
            type="email"
          />
        </div>
        <div className="password-container">
          <TextInput
            label="Password:"
            placeholderValue={passwordInfoText}
            textValue={password}
            onChangeHandler={setPassword}
            type="password"
          />
        </div>
        <Button icon="rightArrow" text="Login" handleOnClick={loginHandler} />
        <div className="login__bottom-text">
          <span>Don&apos;t have an account?</span>
          <Link to="/signup" className="login__bottom-text__link">
            Sign Up here
          </Link>
        </div>
      </div>
      <div className="login__background">
        <LoginImage />
      </div>
    </>
  );
}
