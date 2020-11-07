import React, {useContext, useEffect} from 'react';
import {AiOutlinePlus, AiOutlineMinus, AiFillDelete} from 'react-icons/ai';
import {ProductContext} from '../../context/ProductContext';

const ListItem = ({props}) => {
  const {selectItem, updateQty, deleteProduct, sendUpdatedData} = useContext(
    ProductContext
  );
  const {image, name, price, product_id, qty} = props;

  useEffect(() => {
    sendUpdatedData(product_id);
  }, [selectItem]);

  return (
    <div className='checkout__container'>
      <div className='checkout__item checkout__image'>
        <img src={image} alt={name} style={{width: '5rem'}} />
      </div>

      <div className='checkout__item checkout__name'>
        <h4>{name}</h4>
      </div>

      <div className='checkout__item checkout__price'>
        <h4>{price}</h4>
      </div>

      <div className='checkout__tools checkout__minus'>
        <AiOutlineMinus
          onClick={() => {
            updateQty(product_id, qty - 1);
          }}
        />
      </div>

      <div className='checkout__item checkout__qty'>
        <h4>{qty}</h4>
      </div>

      <div className='checkout__tools checkout__minus'>
        <AiOutlinePlus
          onClick={() => {
            updateQty(product_id, qty + 1);
          }}
        />
      </div>
      <div className='checkout__tools checkout__minus'>
        <AiFillDelete
          onClick={() => {
            deleteProduct(product_id);
          }}
        />
      </div>
    </div>
  );
};

export default ListItem;
