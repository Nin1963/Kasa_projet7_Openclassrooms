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
  // const url = window.location.href;
  // const id = url.substring(url.lastIndexOf("=") + 1);
  
 
  const { id } = useParams();
  let product = {};
  console.log(id);
   product = data.find((item) => item.id === id);
   console.log(Object.keys(product).length);
  const { title, location, host, rating, description, equipments } = product;

  if (Object.keys(product).length !== 0) {
    return (
      <div className="product-section">
        <Slider product={product} />
        <div className="info-container">
          <div className="title-tag-container">
            <div className="title-location">
              <h1 className="product-title">{title}</h1>
              <p className="product-location">{location}</p>
            </div>
            <Tag tag={product.tags} />
          </div>
          <div className="name-star-container">
            <div className="name-img">
              <p>{host.name}</p>
              <img src={host.picture} alt={host.name} />
            </div>
            <Rating rating={rating} />
          </div>
        </div>
        <div className="housing-info">
          <Collapse title=" Description" content={description} />
          <Collapse title=" Équipements" content={equipments} />
        </div>
      </div>
    );
  } else if (product === null){
    
    return <Error />
    
    
  }
}

export default Housing;

