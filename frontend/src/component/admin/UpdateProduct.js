import React, { Fragment } from "react";
import Sidebar from "./Sidebar";
import "./UpdateProduct.css";

const UpdateProduct = () => {
  return (
    <Fragment>
      <div className="update-product-wrapper">
        <Sidebar />
        <div className="message-container">
          <div className="update-product-container">
            <h2>Product cannot be updated</h2>
            <p>We apologize, but the product cannot be updated at the moment.</p>
            <p>kyuki mai thak gya yaar</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UpdateProduct;
