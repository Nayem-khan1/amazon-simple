import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Products.css'

const Products = ({product, cartHandler}) => {
    
    const {category, id, img, name, price, quantity, ratings, ratingsCount, seller, shipping, stock} = product;
    return (
        <div>
            <div>
                <div  className='product-container'>
                    <div className='product-img'>
                        <img src={img} alt="" />
                    </div>
                    <div className='product-info'>
                        <div className='name'>
                            <p>{name}</p>
                        </div>
                        <div className='price'>
                            <p>Price: ${price}</p>
                        </div>
                        <div className='info'>
                            <p>Manufacturer: {seller}</p>
                            <p>Rating: {ratings}</p>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => cartHandler(product)} className='cart-btn'><p>Add to cart</p> <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;