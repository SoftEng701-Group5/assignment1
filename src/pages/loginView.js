import React, {useState} from 'react';
import Button from '../components/global/Button';
import TextInput from '../components/global/TextInput';
import LoginImage from '../assets/images/LoginImage';
import {Link} from 'react-router-dom';

import '../stylesheets/loginView.scss';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = function () {
    console.log(email, password);
  };

  return (
    <>
      <div className='login_layout'>
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
        <div onClick={login}>
          <Button icon={'rightArrow'} text={'Login'} />
        </div>
        Don't have an account?&nbsp;
        {/* <a href='/signup'>Sign Up here</a> */}
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
