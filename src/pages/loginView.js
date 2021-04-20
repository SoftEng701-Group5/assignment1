import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import firebase from "firebase";
import Button from "../components/global/Button";
import TextInput from "../components/global/TextInput";
import LoginImage from "../assets/images/LoginImage";
import { signIn, resetPassword } from "../services/authService";
import DarkModeContext from "../services/theme-context";

/**
 * This component represents the login page,
 * and should contain all elements present in this page
 */

const provider = new firebase.auth.GoogleAuthProvider();
export default function LoginView() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Feedback strings to give user feedback, e.g. Missing email
  const [emailInfoText, setEmailInfoText] = useState("");
  const [passwordInfoText, setPasswordInfoText] = useState("");

  const { isDarkMode } = React.useContext(DarkModeContext);

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
        alert("An invalid username or password has been entered.");

        setPassword("");
      }
    }
  };

  /**
   * handle google authentication
   */
  const googleLoginHandler = async () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      // eslint-disable-next-line no-unused-vars
      .then((result) => {
        history.push("/home");
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {});
  };

  /* Reset password
   */
  const resetPasswordHandler = async () => {
    // Process inputs
    const processedEmail = email.trim();
    // check if the user entered their email
    let validReset = true;
    if (!processedEmail) {
      setEmailInfoText("Please enter your email address");
      validReset = false;
    }

    if (validReset) {
      // send reset password email
      if (await resetPassword(processedEmail)) {
        alert("Reset Password Email has been sent to your email.");
      } else {
        alert("Reset password failed for current email address.");

        setEmail("");
      }
    }
  };

  return (
    <>
      <div className={isDarkMode ? "login" : "login light"}>
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
          <form onSubmit={loginHandler}>
            <TextInput
              label="Password:"
              placeholderValue={passwordInfoText}
              textValue={password}
              onChangeHandler={setPassword}
              type="password"
            />
          </form>
        </div>
        <Button
          type="submit"
          icon="rightArrow"
          text="Login"
          handleOnClick={loginHandler}
        />

        <Button
          type="submit"
          icon="rightArrow"
          text="Google Login"
          handleOnClick={googleLoginHandler}
        />

        <div className="login__bottom-text">
          <span>Don&apos;t have an account?</span>
          <Link to="/signup" className="login__bottom-text__link">
            Sign Up here
          </Link>
          <br />
          <span>Forgot password?</span>
          <a
            href="/#"
            className="login__bottom-text__link"
            onClick={resetPasswordHandler}
          >
            Reset Password
          </a>
        </div>
      </div>
      <div className="login__background">
        <LoginImage />
      </div>
    </>
  );
}
