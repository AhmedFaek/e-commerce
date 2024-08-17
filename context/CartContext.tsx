import React, { createContext, useState, ReactNode } from 'react';
import products from '@/DataBase/data';

const getDefaultCart = () => {
  let cart: Record<number, number> = {};
  for (let index = 0; index < products.length; index++) {
    cart[index] = 0;
  }
  return cart;
}

interface CartContextType {
  products: typeof products;
  cartItems: Record<number, number>;
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  getTotalCartAmount: () => number;
  getTotalCartItems: () => number; 
}

const defaultCart: Record<number, number> = getDefaultCart();
const defaultContextValue: CartContextType = {
  products,
  cartItems: defaultCart,
  addToCart: () => {},
  removeFromCart: () => {},
  getTotalCartAmount: () => 0,
  getTotalCartItems: () => 0, 
};

export const ShopContext = createContext<CartContextType>(defaultContextValue);

export const ShopContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Record<number, number>>(getDefaultCart());

  const addToCart = (itemId: number) => {
    console.log('addToCart function called with itemId:', itemId);
    setCartItems(prev => {
      const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };
      console.log('Updated cart:', updatedCart);
      return updatedCart;
    });
  };
  

  const removeFromCart = (itemId: number) => {
    setCartItems(prev => {
      const updatedCart = { ...prev, [itemId]: Math.max(prev[itemId] - 1, 0) };
      console.log('Removed from cart:', itemId, updatedCart);
      return updatedCart;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemId = Number(item);
        const itemInfo = products.find((product) => product.id === itemId);
        if (itemInfo) {
          totalAmount += itemInfo.newPrice * cartItems[item];
        }
      }
    }
    return totalAmount;
  }

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  }

  const contextValue = { getTotalCartItems, getTotalCartAmount, products, cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};