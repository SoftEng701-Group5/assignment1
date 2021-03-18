import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import Button from '../components/global/Button';
import TextInput from '../components/global/TextInput';
import LoginImage from '../assets/images/LoginImage';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const login = () => {
    console.log(email, password);
  };

  return (
    <>
      <div className='login'>
        <h1 className='welcome'>Welcome</h1>
        <div className='email_container'>
          <TextInput label='Email:' onChangeHandler={setEmail} type='email' />
        </div>
        <div className='password_container'>
          <TextInput
            label='Password:'
            onChangeHandler={setPassword}
            type='password'
          />
        </div>
        <Button icon='rightArrow' text='Login' handleOnClick={login} />
        Don&apos;t have an account?&nbsp;
        <Link to='/signup' className='login_signup_link'>
          Sign Up here
        </Link>
      </div>
      <div className='login_background'>
        <LoginImage />
      </div>
    </>
  );
}
