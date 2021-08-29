import React, { Fragment } from 'react';
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
  return (
    <Fragment>
      <p>Log in to access the full dashboard</p>
      <label htmlFor='email' className={css(styles.label, styles['email-label'])}>Email:</label>
      <input type='email' name='email' id='email' />

      <label htmlFor='password' className={css(styles.label)}>Password:</label>
      <input type='password' name='password' id='password' />

      <button className={css(styles.button)}>OK</button>
    </Fragment>
  );
};

Login.displayName = 'Login';

const styles = StyleSheet.create({
  label: {
    padding: '1rem'
  },
  'email-label': {
    paddingLeft: 0
  },
  button: {
    margin: '0 2rem'
  }
});

export default Login;
