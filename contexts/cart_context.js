import React, { useContext, createContext, useReducer, useEffect } from 'react';

import CartReducer from '../reducers/cart_reducer';
import { getLocalStorage, setLocalStorage } from '../utils/helpers';

import {
  ADD_TO_CART,
  OPEN_CART,
  CLOSE_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from '../utils/actions';

const CartContext = createContext();

const initialState = {
  cart: getLocalStorage('cart'),
  isCartOpen: false,
  total_products: 0,
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

  const openCart = () => {
    dispatch({ type: OPEN_CART });
  };

  const closeCart = () => {
    dispatch({ type: CLOSE_CART });
  };

  const removeFromCart = id => {
    dispatch({ type: REMOVE_FROM_CART, payload: id });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        openCart,
        closeCart,
        removeFromCart,
        clearCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
