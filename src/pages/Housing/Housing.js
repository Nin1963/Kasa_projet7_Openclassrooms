import React from "react";
import { useParams } from "react-router-dom";
import data from "../../assets/data/data.json";
import Collapse from "../../components/Collapse/Collapse";
import Slider from "../../components/Slider/Slider";
import Tag from "../../components/Tag/Tag";
import Rating from "../../components/Rating/Rating";
import Error from "../Error/Error";
import "./Housing.css";
import "../../components/Collapse/Collapse.css";

function Housing() {
  const { id } = useParams();
  let product = {};
  product = data.find((item) => item.id === id);

  if (product) {
    return (
      <div className="product-section">
        <Slider product={product} />
        <div className="info-container">
          <div className="title-tag-container">
            <div className="title-location">
              <h1 className="product-title">{product.title}</h1>
              <p className="product-location">{product.location}</p>
            </div>
            <Tag tag={product.tags} />
          </div>
          <div className="name-star-container">
            <div className="name-img">
              <p>{product.host.name}</p>
              <img src={product.host.picture} alt={product.host.name} />
            </div>
            <div>
              <Rating rating={product.rating} />
            </div>
          </div>
        </div>
        <div className="housing-info">
          <Collapse title=" Description" content={product.description} />
          <Collapse title=" Équipements" content={product.equipments} />
        </div>
      </div>
    );
  } else {
    return <Error />
  }
}

export default Housing;

