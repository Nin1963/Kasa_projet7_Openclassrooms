import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/LOGO.png'

function Header() {
  return (
    <header>
      <div className="logo-banner">
        <img src={logo} alt="logo"/>
      </div>
      <div className="link">
        <Link to="/">Accueil</Link>
        <Link to="/about">À Propos</Link>
      </div>
    </header>
  );
};

export default Header;