import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const Header = () => {
  return (
    <div className={css(styles.header)}>
        <img src={logo} className={css(styles.logo)} alt='logo' />
        <h1 className={css(styles.heading1)}>School dashboard</h1>
    </div>
  );
}

const styles = StyleSheet.create({
  header: {
    borderBottom: '3px solid #e1345b',
    height: '250px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  logo: {
    width: '200px',
    height: '200px'
  },
  heading1: {
    display: 'inline',
    position: 'relative',
    color: '#e1345b'
  }
});

export default Header;
