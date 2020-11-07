import React, {useContext, useEffect} from 'react';
import {ProductContext} from '../../context/ProductContext';
import './Checkout.style.scss';
import ListItem from '../../components/ListItem/ListItem.component';
import OmiseForm from '../../components/OmiseForm/OmiseForm';

const Checkout = () => {
  const {selectItem} = useContext(ProductContext);

  let total = 0;

  return (
    <div className='checkout'>
      <div className='heading'>
        <h1>Checkout</h1>
        <div className='checkout__overall'>
          {selectItem &&
            selectItem.map(item => {
              total = total + item.qty * item.price;
              return <ListItem key={item.id} props={{...item}} />;
            })}
          <div className='checkout__total'>
            <h1>Total : {total} Bath</h1>
          </div>

          <OmiseForm total={total} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
