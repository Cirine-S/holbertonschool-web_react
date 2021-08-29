import React, { Fragment } from 'react';
import './Login.css';

const Login = () => {
    return (
      <Fragment>
        <p>Log in to access the full dashboard</p>
        <label htmlFor='email'>Email:</label>
        <input type='email' name='email' id='email' />
  
        <label htmlFor='password'>Password:</label>
        <input type='password' name='password' id='password' />
  
        <button>OK</button>
      </Fragment>
    );
  };
  
  export default Login;
