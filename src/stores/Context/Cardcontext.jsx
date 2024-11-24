import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([])

    const addToCart = (item) => {
        setCartItems([...cartItems, item])
    }
    const removeFrmCart = (item) => {
        setCartItems([...cartItems, item])
        setCartItems(cartItems.filter(apple => { apple !== item }))
    }


    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFrmCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}

