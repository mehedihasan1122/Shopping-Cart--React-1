import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {

    const {img , name , seller, price , ratings} = props.product
    return (
        <div className='product'>

        <img src={img} alt="" ></img>
       <div className='product-info'>
       <p className='product-name'> {name}</p>
       <p>Price : ${price}</p>
       <p><small>seller: {seller}</small></p>
       <p><small>Ratings: {ratings}</small></p>
       </div>

       <button onClick={()=>props.handlerAddToCart(props.product)} className='btn-cart'>
        <p className='btn-text'>add to cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
            
        </div>
    );
};

export default Product;