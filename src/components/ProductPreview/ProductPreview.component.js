import React from 'react';
import ProductOverview from '../ProductOverview/ProductOverview.component';
import './ProductPreview.style.scss';

const ProductPreview = () => {
  return (
    <section className='productpreview' id='preview'>
      <div className='productpreview__container'>
        <h3 className='heading-3'>Brew Coffee</h3>
        <p className='text'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, quam.
        </p>
        <div className='productpreview__list'>
          <ProductOverview />
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;
