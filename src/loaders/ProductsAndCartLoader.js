import { getStoredCart } from "../utilities/fakedb";

export const ProductsAndCartLoader = async() =>{
    //get all products
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    
    //get ordered products
    const savedProduct = getStoredCart();
    const initialCart = [];
    
    for(const id in savedProduct){
        const quantity = savedProduct[id];
        const addedProduct = products.find(product => product.id === id);
        addedProduct.quantity = quantity;
        initialCart.push(addedProduct);
    }
    return {products: products, initialCart: initialCart};
}