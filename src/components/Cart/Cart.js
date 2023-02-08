import React from 'react';
import './Cart.css'

const Cart = ({cart, removeCart}) => {
    let total = 0;
    let shippingCharge = 0;
    let quantity = 0;
    for(const product of cart){
        quantity =quantity + product.quantity;
        total += product.price * product.quantity;
        shippingCharge += product.shipping;
    }
    const tax = total * 0.1;
    const grandTotal = total + shippingCharge + tax;
    return (
        <div className='cart-container'>
            <h2>Order Summary</h2>
            <div className='product-details'>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${shippingCharge}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <p className='grand-total'>Grand Total: ${grandTotal.toFixed(2)}</p>
                <button onClick={removeCart}>Clear Cart</button>
            </div>
        </div>
    );
};

export default Cart;