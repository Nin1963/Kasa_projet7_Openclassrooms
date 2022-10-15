import React from "react";
import starOrange from "../../assets/icons/star_orange.svg";
import starGrey from "../../assets/icons/star_grey.svg";

function Rating(rating) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating.rating) {
      stars.push(<img key={i} src={starOrange} alt="star" />);
    } else {
      stars.push(<img key={i} src={starGrey} alt="star" />);
    }
  }
  return stars;
}

export default Rating