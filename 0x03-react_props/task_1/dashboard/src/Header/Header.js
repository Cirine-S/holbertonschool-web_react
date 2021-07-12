import logo from '../assets/HolbertonLogo.jpg';
import './Header.css';
import React from "react";

function Header() {
  return (
    <div className="App-header">
    <img src={logo} alt="logo" />
    <h1>
      School dashboard
    </h1>
  </div>
  );
}

export default Header;