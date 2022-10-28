import React from 'react';
import data from '../../assets/data/data.json';
import { Link } from 'react-router-dom';

function Card() {
  return data.map((product) => (
    <div className="card" key={product.id}>
      <Link to={'./housing/' + product.id }>
        <img id={product.id} src={product.cover} alt={product.title} />
      </Link>
      <div className="card-content">
        <h3>{product.title}</h3>
      </div>
    </div>
  ));
};

export default Card;