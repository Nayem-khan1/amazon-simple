import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { clearDb, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import OrderReviewItem from '../OrderReviewItem/OrderReviewItem';
import './OrderReview.css'

const OrderReview = () => {
    const { initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart);
    const removeCart = () =>{
        setCart([]);
        clearDb();
    } 
    const removeFromCart = (id) =>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    return (
        <div className='margin-top'>
            <div className='order-container'>
                <div className='order-product'>
                    {
                        cart.map(product => <OrderReviewItem 
                            key={product.id}
                            product={product}
                            removeFromCart={removeFromCart}
                        ></OrderReviewItem>)
                    }

                    {
                        cart.length === 0 && <h2>Selected product not found. Please <Link to={'/'}>select product</Link></h2>
                    }
                </div>
                <div className='cart'>
                    <Cart 
                    cart={cart}
                    removeCart={removeCart}
                    ></Cart>
                </div>
                
            </div>
        </div>
    );
};

export default OrderReview;