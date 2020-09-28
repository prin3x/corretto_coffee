import React from "react";
import "./ProductOverview.style.scss";

const ProductOverview = () => {
  return (
    <div className='product__container'>
      <div className='product__container__wrapper'>
        <div className='product__image'>IMAGE</div>
      </div>
      <div className='product__container__description'>
        <p className='text--light'>Lorem ipsum dolor sit amet.</p>
        <h4 className='price'>999 $</h4>
      </div>
    </div>
  );
};

export default ProductOverview;
