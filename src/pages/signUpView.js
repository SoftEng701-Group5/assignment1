import React, { useState } from "react";
import { Link } from "react-router-dom";

import TextInput from '../components/global/TextInput';
import Button from '../components/global/Button';
import SignUpBGImage from '../assets/images/SignupImage';

export default function SignUpView( ) {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ firstNameInfoText, setFirstNameInfoText ] = useState("");
    const [ lastNameInfoText, setLastNameInfoText ] = useState("");
    const [ emailInfoText, setEmailInfoText ] = useState("");
    const [ passwordInfoText, setPasswordInfoText ] = useState("");

    const signUp = async () => {
        const processedFirstName = firstName.trim();
        const processedLastName = lastName.trim();
        const processedEmail = email.trim();
        const processedPassword = password.trim();

        // For debugging
        console.log(`First name: ${processedFirstName} \nLast name: ${processedLastName} \nEmail: ${processedEmail} \nPassword: ${processedPassword}`);
        
        let validSignup = true;
        // Check inputs
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
            // Reset variables
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
        } else {
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
                  type="password"
                  textValue={password} 
                  onChangeHandler={setPassword} 
                  placeholderValue={passwordInfoText}
                />
                <Button icon="rightArrow" text="Sign Up" handleOnClick={signUp} />
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