// set local storage data
export const addToDb = id => {
    let shoppingCart = getStoredCart();

    //add quantity
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}
//get from local storage

export const getStoredCart = () => {
    let shoppingCart = {};
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

//remove from cart
export const removeFromDb = (id) =>{
    const shoppingCart = getStoredCart();
    if(id in shoppingCart){
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}

//clear local storage
export const clearDb = () => {
    localStorage.removeItem('shopping-cart');
}