import React from 'react';
import '../styles/Logo.css';

import LogoIcon from '../img/Logo.png';

function Logo() {
  return (
    <div className="logo-container">
      <img src={LogoIcon} alt="Logo-icon" />
      <h1>MyNotes</h1>
    </div>
  );
}

export default Logo;
