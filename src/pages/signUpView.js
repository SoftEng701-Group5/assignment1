import React, { useState } from "react";
import TextInput from '../components/global/TextInput';
import Button from '../components/global/Button';
import { Link } from "react-router-dom";
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

    const signUp = () => {
        // For debugging
        console.log(`First name: ${firstName} \nLast name: ${lastName} \nEmail: ${email} \nPassword: ${password}`);


        // Check inputs
        if (!firstName) {
            setFirstNameInfoText("Please enter your first name");
        }
        if (!lastName) {
            setLastNameInfoText("Please enter your last name");
        }
        if (!email) {
            setEmailInfoText("Please enter an email");
        }
        if (!password) {
            setPasswordInfoText("Please enter a password");
        }


        // Reset variables
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
    }

    return (
        <div className="sign-up--root">
            <div className="sign-up--container">
                <h1>Sign Up</h1>
                <TextInput 
                  label={"First Name:"} 
                  textValue={firstName} 
                  onChangeHandler={setFirstName} 
                  placeholderValue={firstNameInfoText}
                />
                <TextInput 
                  label={"Last Name:"} 
                  textValue={lastName} 
                  onChangeHandler={setLastName}
                  placeholderValue={lastNameInfoText} 
                />
                <TextInput 
                  label={"Email:"} 
                  textValue={email} 
                  onChangeHandler={setEmail}
                  placeholderValue={emailInfoText}
                />
                <TextInput 
                  label={"Password:"} 
                  textValue={password} 
                  onChangeHandler={setPassword} 
                  placeholderValue={passwordInfoText}
                />
                <div onClick={signUp}>
                    <Button icon={"rightArrow"} text={"Sign Up"} />
                </div>
                <div className="sign-up--bottom-text">
                    Already have an account?
                    <Link to="/" className="sign-up--bottom-text--link">
                        Log in here
                    </Link>
                </div>
            </div>
            <div class="sign-up--bg">
                <SignUpBGImage />
            </div>
        </div>
    );
}