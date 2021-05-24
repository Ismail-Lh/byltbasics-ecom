import React, { useContext, createContext, useReducer, useEffect } from 'react';

import CartReducer from '../reducers/cart_reducer';
import { getLocalStorage, setLocalStorage } from '../utils/helpers';

import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../utils/actions';

const CartContext = createContext();

const initialState = {
  cart: getLocalStorage('cart'),
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (amount, size, color, id, product) => {
    dispatch({
      type: ADD_TO_CART,
      payload: { amount, size, color, id, product },
    });
  };

  useEffect(() => {
    setLocalStorage('cart', state.cart);
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
