import React, { useReducer } from 'react'
import CartContext from './cart-context'
const defaultCartState = {
    items: [],
    totalAmount: 0,
}
const cartReducer = (state, action) => {
    return defaultCartState;
}
const CartProvider = (props) => {
    useReducer()
    const addItemToCartHandler = (item) => { }
    const removeItemToCartHandler = (id) => { }
    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler,
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
