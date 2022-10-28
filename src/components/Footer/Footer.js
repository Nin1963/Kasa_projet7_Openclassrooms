import React from 'react';
import logo from '../../assets/img/LogoWhite.png'

function Footer() {
  return (
    <footer>
      <div className="logo-banner ">
        <img src={logo} alt="logo"/>
      </div>
      <div className="footer-info">
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;