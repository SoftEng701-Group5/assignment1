import React, {useState} from 'react';
import Button from '../components/global/Button';
import LoginField from '../components/LoginField';

import '../stylesheets/loginView.scss';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = function () {
    console.log(email, password);
  };

  return (
    <div className='login_layout'>
      <h1 className='welcome'>Welcome</h1>
      <div className='email_container'>
        <LoginField label='Email:' onChangeHandler={setEmail} type='email' />
      </div>
      <div className='password_container'>
        <LoginField
          label='Password:'
          onChangeHandler={setPassword}
          type='password'
        />
      </div>
      <div onClick={login}>
        <Button icon={'rightArrow'} text={'Login'} />
      </div>
      Don't have an account? <a href='/home'>Sign Up here</a>
    </div>
  );
}
