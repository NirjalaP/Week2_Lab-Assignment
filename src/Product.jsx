import React from "react";

function Product({ image, description, value }) {
  return (
    <div className="product">
      <h3>{description}</h3>
      <img src={image} alt={description} className="product-img" />
      <div className="quantity-control">
        <input type="number" value={value} readOnly />
        <span>quantity</span>
      </div>
    </div>
  );
}

export default Product;
