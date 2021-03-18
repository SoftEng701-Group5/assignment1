import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

import Button from '../components/global/Button';
import TextInput from '../components/global/TextInput';
import LoginImage from '../assets/images/LoginImage';

export default function LoginView() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ emailInfoText, setEmailInfoText ] = useState("");
  const [ passwordInfoText, setPasswordInfoText ] = useState("");
  
  const login = () => {
    // Process inputs
    const processedEmail = email.trim();
    const processedPassword = password.trim();
    
    console.log(processedEmail, processedPassword);

    if (processedPassword && processedEmail) {
      history.push('/home');
    } 
    else {
      if (!processedEmail) {
        setEmailInfoText("Please enter your email address");
      } 
      if (!processedPassword) {
        setPasswordInfoText("Please enter your password");
      }
    }
  };

  return (
    <>
      <div className='login'>
        <h1 className='login__welcome'>Welcome</h1>
        <div className='email-container'>
          <TextInput 
            label='Email:' 
            placeholderValue={emailInfoText}
            onChangeHandler={setEmail} 
            type='email' />
        </div>
        <div className='password-container'>
          <TextInput
            label='Password:'
            placeholderValue={passwordInfoText}
            onChangeHandler={setPassword}
            type='password'
          />
        </div>
        <Button icon='rightArrow' text='Login' handleOnClick={login} />
        <div className="login__bottom-text">
          <span>Don&apos;t have an account?</span>
          <Link to='/signup' className='login__bottom-text__link'>
            Sign Up here
          </Link>
        </div>
      </div>
      <div className='login__background'>
        <LoginImage />
      </div>
    </>
  );
}
