import type React from "react";
import { createContext, useContext, useEffect, useReducer } from "react";

import CartReducer from "../reducers/cart_reducer";
import { getLocalStorage, setLocalStorage } from "../utils/helpers";

import type { Product } from "../types";
import {
  ADD_TO_CART,
  CLEAR_CART,
  CLOSE_CART,
  COUNT_CART_SUBTOTAL,
  COUNT_TOTAL_PRODUCTS,
  OPEN_CART,
  REMOVE_FROM_CART,
  TOGGLE_CART_AMOUNT,
} from "../utils/actions";

type CartContextType = {
  cart: {
    id: number;
    amount: number;
    size: string;
    color: string;
    product: {
      id: number;
      name: string;
      price: number;
      image: string;
    };
  }[];
  isCartOpen: boolean;
  total_products: number;
  subTotal: number;
  addToCart: ({ amount, size, color, id, product }: AddToCartProps) => void;
  openCart: () => void;
  closeCart: () => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  toggleCartAmount: (id: number, value: string) => void;
};

const CartContext = createContext<CartContextType | null>(null);

const initialState = {
  cart: getLocalStorage("cart"),
  isCartOpen: false,
  total_products: 0,
  subTotal: 0,
};

type CartProviderProps = {
  children: React.ReactNode;
};

type AddToCartProps = {
  id: string;
  product: Product;
  amount: number;
  size: string;
  color: string;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = ({ amount, size, color, id, product }: AddToCartProps) => {
    dispatch({
      type: ADD_TO_CART,
      payload: { amount, size, color, id, product },
    });
  };

  useEffect(() => {
    setLocalStorage("cart", state.cart);
    dispatch({ type: COUNT_TOTAL_PRODUCTS });
    dispatch({ type: COUNT_CART_SUBTOTAL });
  }, [state.cart]);

  const openCart = () => {
    dispatch({ type: OPEN_CART });
  };

  const closeCart = () => {
    dispatch({ type: CLOSE_CART });
  };

  const removeFromCart = (id: string) => {
    dispatch({ type: REMOVE_FROM_CART, payload: id });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const toggleCartAmount = (id: string, value: string) => {
    dispatch({ type: TOGGLE_CART_AMOUNT, payload: { id, value } });
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
        toggleCartAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }

  return context;
};
