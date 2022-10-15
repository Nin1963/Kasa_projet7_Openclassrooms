import React from 'react';
import { Link } from 'react-router-dom';
import homeIcons from '../../assets/icons/home.svg';
import door from '../../assets/icons/door.svg';
import k from '../../assets/icons/k.svg';
import s from '../../assets/icons/s.svg';
import a from '../../assets/icons/a.svg';

function Header() {
  return (
    <header>
      <div className="logo-banner">
        <div className="k">
          <img src={k} alt="k" />
        </div>
        <div className="home-icon">
          <img src={homeIcons} alt="home" />
          <div className="door">
            <img src={door} alt="door" />
          </div>
        </div>
        <div className="s">
          <img src={s} alt="S" />
        </div>
        <div className="a">
          <img src={a} alt="a" />
        </div>
      </div>
      <div className="link">
        <Link to="/">Accueil</Link>
        <Link to="/about">À Propos</Link>
      </div>
    </header>
  );
};

export default Header;