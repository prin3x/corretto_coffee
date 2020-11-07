import React, {useEffect, useState} from 'react';
import './ProductOverview.style.scss';
import axios from '../../config/axios';
import {Link} from 'react-router-dom';

const ProductOverview = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const {data} = await axios.get('/api/products');
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);

  return products
    ? products.map(product => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`} className='product__container'>
            <div className='product__container__wrapper'>
              <div className='product__image'>
                <img
                  src={product.image}
                  alt={product.description}
                  className='product__image-inside'
                />
              </div>
            </div>
            <div className='product__container__description'>
              <p className='text--light'>{product.name}</p>
              <h4 className='price'>{product.price} $</h4>
            </div>
          </Link>
        </div>
      ))
    : null;
};

export default ProductOverview;
