import React, { createContext, useState } from 'react'

export const Cart = createContext();

export const Context = ({ children }) => {
    const [cart, setCart] = useState([]);
  return (
    <Cart.Provider value={{ cart, setCart }}>
        {children}
    </Cart.Provider>
  )
}
