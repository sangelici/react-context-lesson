import { createContext } from 'react';

// we are instantiating an object because we want to set the value of our cart
// but also create a function to update that value -> cart hidden value
const CartContext = createContext({
    hidden: true,
    toggleHidden: () => {}
});

export default CartContext;