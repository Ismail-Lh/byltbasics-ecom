import React, { useContext, createContext, useReducer, useEffect } from 'react';

import CartReducer from '../reducers/cart_reducer';
import { getLocalStorage, setLocalStorage } from '../utils/helpers';

import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../utils/actions';

const CartContext = createContext();

const initialState = {};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  return (
    <CartContext.Provider
      value={{
        ...state,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
