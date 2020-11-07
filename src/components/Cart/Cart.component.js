import React, {useContext, useState, useEffect} from 'react';
import {RiShoppingCartLine} from 'react-icons/ri';
import './Cart.style.scss';
import {ProductContext} from '../../context/ProductContext';
import TotalPrice from '../TotalPrice/TotalPrice';
import SelectedItem from '../SelectedItems/SelectedItem';
import CtaButton from '../CtaButton/CtaButton';
import axios from '../../config/axios';

const Cart = () => {
  const {selectItem} = useContext(ProductContext);
  const [hide, toggleHide] = useState(true);
  let total = 0;

  return (
    <div className='cart navbar__link--list'>
      <RiShoppingCartLine onClick={() => toggleHide(!hide)} />
      {hide ? null : (
        <div className='cart__container'>
          {selectItem ? (
            selectItem.map(item => {
              total = total + item.qty * item.price;
              return (
                <div key={item.id}>
                  <SelectedItem
                    name={item.name}
                    image={item.image}
                    qty={item.qty}
                    price={item.price}
                  />
                </div>
              );
            })
          ) : (
            <div className='cart__container--empty'>
              <h1 style={{fontSize: '1.5rem', color: '#000'}}>Empty</h1>
            </div>
          )}
          <TotalPrice total={total} />{' '}
          <CtaButton at={'/checkout'}>Checkout</CtaButton>
        </div>
      )}
    </div>
  );
};

export default Cart;
