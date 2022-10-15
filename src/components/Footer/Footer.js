import React from 'react';
import homeIcons from '../../assets/icons/home_white.svg';
import door from '../../assets/icons/door_white.svg';
import k from '../../assets/icons/k_white.svg';
import s from '../../assets/icons/s_white.svg';
import a from '../../assets/icons/a_white.svg';

function Footer() {
  return (
    <footer>
      <div className="logo-banner ">
        <div className="k k-white">
          <img src={k} alt="k" />
        </div>
        <div className="home-icon home-white">
          <img src={homeIcons} alt="home" />
          <div className="door door-white">
            <img src={door} alt="door" />
          </div>
        </div>
        <div className="s s-white">
          <img src={s} alt="S" />
        </div>
        <div className="a a-white">
          <img src={a} alt="a" />
        </div>
      </div>
      <div className="footer-info">
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;