import './Footer.css';
import {getFullYear, getFooterCopy} from '../utils/utils';
import React from "react";

function Footer() {
  return (

      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(1)}
        </p>
      </div>
  );
}

export default Footer;