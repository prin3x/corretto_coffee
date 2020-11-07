import React, {createContext, useReducer, useEffect} from 'react';
import {ProductReducer} from '../reducer/ProductReducer';
import axios from '../config/axios';

export const ProductContext = createContext();

export const ProductContextProvider = ({children}) => {
  const [selectItem, dispatch] = useReducer(ProductReducer, []);

  const retreiveItems = async () => {
    const {data} = await axios.get('/api/carts/');
    if (data) dispatch({type: 'RETRIEVE_ALL_ITEMS', data});
  };

  const addItemToShoppingCart = async (id, attr) => {
    dispatch({type: 'ADD_ITEM_TO_SHOPPING_CART', ...attr});
    await axios.post(`/api/carts/addtocart/${id}`, {
      qty: attr.qty || 1,
    });
  };

  const sendUpdatedData = async productId => {
    await axios.patch(`api/carts/updatecart/${productId}`, {
      qty: selectItem.find(item => item.product_id === productId).qty,
    });
  };

  const deleteProduct = async productId => {
    await axios.delete(`api/carts/delete/${productId}`);
    dispatch({type: 'DELETE_ITEM_FROM_CART', productId});
  };
  const updateQty = async (productId, qty) => {
    qty === 0
      ? deleteProduct(productId)
      : await dispatch({type: 'UPDATE_QTY', productId, qty});
  };

  useEffect(() => {
    retreiveItems();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        selectItem,
        dispatch,
        addItemToShoppingCart,
        retreiveItems,
        updateQty,
        deleteProduct,
        sendUpdatedData,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
