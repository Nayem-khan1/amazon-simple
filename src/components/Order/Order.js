import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, clearDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Order.css'

const Order = () => {
    const products = useLoaderData();

    const [cart, setCart] = useState([]);

    useEffect(()=>{
        const savedCart = [];
        const storedCart = getStoredCart();
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])
    const removeCart = () =>{
        setCart([]);
        clearDb();
    }
    const cartHandler = (selectedProduct) =>{
        let newCart = [];
        const exist = cart.find(product => product.id === selectedProduct.id);
        if(!exist){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
    }
    return (
        <div className='order-container'>
            <div className='product'>
                {
                    products.map(product => <Products  
                    key={product.id}
                    product={product}
                    cartHandler={cartHandler}
                    ></Products>)
                }
            </div>
            <div className='cart'>
                <Cart
                cart={cart}
                removeCart={removeCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Order;