import React, {useState, useEffect} from 'react';

const SelectedItem = ({name, image, price, qty}) => {
  return (
    <div className='cart__container--inner'>
      <div className='cart__item'>
        <img src={image} alt={name} className='cart__item-image' />
      </div>
      <div className='cart__item'>{price}</div>
      <div className='cart__item'>{qty}</div>
    </div>
  );
};

export default SelectedItem;
