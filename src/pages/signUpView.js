import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import TextInput from '../components/global/TextInput';
import Button from '../components/global/Button';
import SignUpBGImage from '../assets/images/SignupImage';

import { signUp } from '../services/authService';

export default function SignUpView() {
    const history = useHistory();

    // Input fields
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Feedback strings to provide user with instructions
    // E.g. if they leave out an input, or enter something incorrectly
    const [firstNameInfoText, setFirstNameInfoText] = useState("");
    const [lastNameInfoText, setLastNameInfoText] = useState("");
    const [emailInfoText, setEmailInfoText] = useState("");
    const [passwordInfoText, setPasswordInfoText] = useState("");

    const signUpHandler = async () => {
        // Remove leading + trailing whitespace
        const processedFirstName = firstName.trim();
        const processedLastName = lastName.trim();
        const processedEmail = email.trim();
        const processedPassword = password.trim();

        // For debugging
        // console.log(`First name: ${processedFirstName} \nLast name: ${processedLastName} \nEmail: ${processedEmail} \nPassword: ${processedPassword}`);

        let validSignup = true;
        // Check if all inputs were provided
        if (!processedFirstName) {
            setFirstNameInfoText("Please enter your first name");
            validSignup = false;
        }
        if (!processedLastName) {
            setLastNameInfoText("Please enter your last name");
            validSignup = false;
        }
        if (!processedEmail) {
            setEmailInfoText("Please enter an email");
            validSignup = false;
        }
        if (!processedPassword) {
            setPasswordInfoText("Please enter a password");
            validSignup = false;
        }

        if (validSignup) {
            // All signup information was provided, redirect to login
            // If successful, can redirect user back to login
            if (await signUp(processedEmail, processedPassword, processedFirstName, processedLastName)) {
                history.push("/");
            } else {
                // eslint-disable-next-line no-alert
                alert("Sorry, could not sign up");
            }

        } else {
            // Some signup information wasn't provided
            // Don't want to reset inputs, as user might have made a typo
            // Instead, set inputs to the correctly processed strings
            setFirstName(processedFirstName);
            setLastName(processedLastName);
            setEmail(processedEmail);
            setPassword(processedPassword);
        }
    }

    return (
        <div className="sign-up__root">
            <div className="sign-up__container">
                <h1>Sign Up</h1>
                <TextInput
                    label="First Name:"
                    textValue={firstName}
                    onChangeHandler={setFirstName}
                    placeholderValue={firstNameInfoText}
                />
                <TextInput
                    label="Last Name:"
                    textValue={lastName}
                    onChangeHandler={setLastName}
                    placeholderValue={lastNameInfoText}
                />
                <TextInput
                    label="Email:"
                    type="email"
                    textValue={email}
                    onChangeHandler={setEmail}
                    placeholderValue={emailInfoText}
                />
                <TextInput
                    label="Password:"
                    textValue={password}
                    onChangeHandler={setPassword}
                    placeholderValue={passwordInfoText}
                />
                <Button icon="rightArrow" text="Sign Up" handleOnClick={signUpHandler} />
                <div className="sign-up__bottom-text">
                    Already have an account?
                    <Link to="/" className="sign-up__bottom-text__link">
                        Log in here
                    </Link>
                </div>
            </div>
            <div className="sign-up__bg">
                <SignUpBGImage />
            </div>
        </div>
    );
}