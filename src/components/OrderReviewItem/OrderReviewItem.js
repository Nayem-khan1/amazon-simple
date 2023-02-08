import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './OrderReviewItem.css'

const OrderReviewItem = ({product, removeFromCart}) => {
    const {img, name, price, quantity, shipping, id} = product;
    return (
        <div className='order-item-container'>
            <div className='order-item-img'>
                <img src={img} alt="" />
            </div>
            <div className='order-info-container'>
                <div className='order-info'>
                    <p className='name'>{name}</p>
                    <p className='price'>Price: ${price}</p>
                    <p className='price'>Shipping: ${shipping}</p>
                    <p className='quantity'>Quantity: {quantity}</p>
                </div>
                <div className='btn-container'>
                    <button className='delete-btn' onClick={() => removeFromCart(id)}>
                        <FontAwesomeIcon className='btn-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderReviewItem;