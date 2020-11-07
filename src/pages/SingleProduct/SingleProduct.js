import React, {useEffect, useState, useContext} from 'react';
import axios from '../../config/axios';
import './SingleProduct.style.scss';
import CtaButton from '../../components/CtaButton/CtaButton';
import {ProductContext} from '../../context/ProductContext';
import {UserContext} from '../../context/UserContext';
import ItemQuantity from '../../components/ItemQuantity/ItemQuantity';
import {Link} from 'react-router-dom';
import RatingSection from '../../components/RatingSection/RatingSection.component';

const SingleProduct = ({match}) => {
  const [product, setProduct] = useState();

  const {addItemToShoppingCart} = useContext(ProductContext);
  const {role} = useContext(UserContext);

  const onChangeOption = value => {
    setProduct({...product, qty: value});
  };

  const fetchProduct = async () => {
    try {
      const {data} = await axios.get(`/api/products/${match.params.id}`);
      setProduct(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [match.params.id]);

  return product ? (
    <div className='singleproduct'>
      <h1>{product.name}</h1>

      <div className='singleproduct__container'>
        <div className='singleproduct__detail-container'>
          <div className='singleproduct__image-container'>
            <img src={product.image} alt='' className='singleproduct__image' />
          </div>
        </div>
        <div className='singleproduct__detail-container'>
          <div className='singleproduct__description'>
            <p>{product.description}</p>
            <p>{product.price} Baht</p>
          </div>
          <div className='singleproduct__qty-container'>
            <ItemQuantity
              onChangeOption={onChangeOption}
              countInStock={product.countInStock}
            />
          </div>
          <div className='singleproduct__button-container'>
            <CtaButton
              addToCart={() =>
                addItemToShoppingCart(match.params.id, {...product})
              }
            >
              Add To Cart
            </CtaButton>

            <CtaButton
              type='link'
              addToCart={() =>
                addItemToShoppingCart(match.params.id, {...product})
              }
            >
              <Link to='/checkout'>Buy Now</Link>
            </CtaButton>
          </div>
        </div>
      </div>
      <div className='rating__container'>
        <RatingSection productId={match.params.id} />
      </div>
    </div>
  ) : null;
};

export default SingleProduct;
