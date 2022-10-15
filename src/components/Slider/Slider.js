import React, { useState } from "react";
import rightArrow from "../../assets/icons/arrow_right.svg";
import leftArrow from "../../assets/icons/arrow_left.svg";
import "./Slider.css";

function Slider(product) {
  product = product.product;
  const [index, setIndex] = useState(0);

  function slide(e) {
    if (e.target.classList.contains("arrow")) {
      if (index === product.pictures.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }
    if (e.target.classList.contains("left")) {
      if (index === 0) {
        setIndex(product.pictures.length - 1);
      } else {
        setIndex(index - 1);
      }
    }
  }

  return (
    <div className="slider">
      <img
        className="img-slider"
        src={product?.pictures[index]}
        alt={product?.title}
      />
      <img
        className="arrow right"
        src={rightArrow}
        alt="RightArrow"
        onClick={(e) => slide(e)}
      />
      <img
        className="arrow left"
        src={leftArrow}
        alt="LeftArrow"
        onClick={(e) => slide(e)}
      />
      <span className="slider-image-number">
        {index + 1}/{product.pictures.length}
      </span>
    </div>
  );
};

export default Slider;
