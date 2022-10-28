import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../assets/img/404.png'
import './Error.css'

function Error() {
  return (
    <div className="error-container">
      <img src={error} alt="404"/>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
};

export default Error;