import React, { Fragment } from 'react';
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
  return (
    <Fragment>
      <p>Log in to access the full dashboard</p>
      <div className={css(styles.form)}>
        <div className={css(styles['input-group'])}>
          <label htmlFor='email' className={css(styles.label, styles['email-label'])}>Email:</label>
          <input type='email' name='email' id='email' />
        </div>
      <div className={css(styles['input-group'])}>
        <label htmlFor='password' className={css(styles.label)}>Password:</label>
        <input type='password' name='password' id='password' />
      </div>

      <button className={css(styles.button)}>OK</button>
    </div>
    </Fragment>
  );
};

Login.displayName = 'Login';

const styles = StyleSheet.create({
  label: {
    '@media (min-width: 901px)': {
      padding: '1rem'
    },
    '@media (max-width: 900px)': {
      marginRight: '0.5rem'
    }
  },
  'email-label': {
    paddingLeft: 0
  },
  button: {
    '@media (min-width: 901px)': {
      margin: '0 2rem'
    },
    '@media (max-width: 900px)': {
      margin: '0.25rem 0'
    }
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'flex-start'
  },
  'input-group': {
    '@media (max-width: 900px)': {
      margin: '0.25rem 0'
    }
  }
});

export default Login;
