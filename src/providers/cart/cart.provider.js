import React, { createContext, useState, useEffect } from 'react';

import { addItemToCart, removeItemFromCart, filterItemFromCart, getCartItemsCount } from './cart.utils';

export const CartContext = createContext({
    hidden: true,
    toggleHidden: () => {},
    cartitems: [],
    addItem:  () => {},
    removeItem: () => {},
    clearItemFromCart: () => {},
    cartItemsCount: 0
});

// children are the components that will be wrapped
const CartProvider = ({ children }) => {
    const [hidden, setHidden] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);


    const addItem = item => setCartItems(addItemToCart(cartItems, item))
    const removeItem = item => setCartItems(removeItemFromCart(cartItems, item))
    const clearItemFromCart = item => setCartItems(filterItemFromCart(cartItems, item))
    const toggleHidden = () => setHidden(!hidden);

    useEffect(() => {
        setCartItemsCount(getCartItemsCount(cartItems))
    }, [cartItems])

    return(


        // now have access to all of the cart context inside our application because it is wrapped by the provider
        <CartContext.Provider
            value={{
                hidden,
                toggleHidden,
                cartItems,
                addItem,
                removeItem,
                clearItemFromCart,
                cartItemsCount
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;