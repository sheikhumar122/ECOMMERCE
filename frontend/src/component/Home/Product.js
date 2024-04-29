import React from "react";
import { Link } from "react-router-dom";
//import ReactStars from "react-rating-stars-component";
import { Rating } from "@mui/material";

const Product=( {product})=>{
  const options={
    readOnly:true,
      value:product.ratings,
      isHalf:true,
      size:"large",
      precision:0.5,
};

return (
  <Link className="productCard" to={`/product/${product._id}`}>
    {product.image.length > 0 && <img src={product.image[0].url} alt={product.name} />}
    <p>{product.name}</p>
    <div>
      <Rating {...options} />
      <span>({product.numOfReviews} Reviews)</span>
    </div>
    <span>{`₹${product.price}`}</span>
  </Link>
);
        };


export default Product;
