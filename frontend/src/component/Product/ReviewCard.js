import { Rating } from "@material-ui/lab";
import React from "react";
import profilePng from "../images/Profile.png";
//import ReactStars from "react-rating-stars-component";

const ReviewCard = ({ review }) => {
    const options={
      readOnly:true,
      value:review.rating,
      isHalf:true,
      size:"large",
      precision:0.5,
  };

  return (
    <div className="reviewCard" key={review._id}>
      <img src={profilePng} alt="User" />
      <p>{review.name}</p>
      <Rating {...options} />
      <span>{review.comment}</span>
    </div>
  );
};

export default ReviewCard;