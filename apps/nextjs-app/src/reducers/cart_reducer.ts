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
import { formatPrice } from "../utils/helpers";

type CartItem = {
  id: string;
  name: string;
  style: string;
  collections: string;
  route: string;
  gender: string;
  color: string;
  price: number;
  discountPer: number;
  image: string;
  size: string;
  amount: number;
  max: number;
};

type CartState = {
  cart: CartItem[];
  isCartOpen: boolean;
  total_products: number;
  subTotal: string;
};

type Action = {
  type: string;
  payload: {
    amount: number;
    size: string;
    color: string;
    id: string;
    product: Product;
    value: string;
  };
};

function CartReducer(state: CartState, action: Action): CartState {
  if (action.type === ADD_TO_CART) {
    const { amount, size, color, id, product } = action.payload;

    const tempItem = state.cart.find(item => item.id === id + color + size);

    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id + color + size) {
          let newAmount = cartItem.amount + amount;

          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }

          return { ...cartItem, amount: newAmount };
        }
        return cartItem;
      });

      return { ...state, cart: tempCart };
    }
    const newItem: CartItem = {
      id: id + color + size,
      name: product.name,
      style: product.style,
      collections: product.collections,
      route: product.route,
      gender: product.gender,
      color,
      price: product.price,
      discountPer: product.discountPer,
      image: product.images[0],
      size,
      amount,
      max: product.stock,
    };

    return { ...state, cart: [...state.cart, newItem] };
  }

  if (action.type === OPEN_CART) {
    return { ...state, isCartOpen: true };
  }

  if (action.type === CLOSE_CART) {
    return { ...state, isCartOpen: false };
  }

  if (action.type === REMOVE_FROM_CART) {
    const { id } = action.payload;

    const newCart = state.cart.filter(product => product.id !== id);

    return { ...state, cart: newCart };
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === COUNT_TOTAL_PRODUCTS) {
    const productAmount = state.cart.map(({ amount }) => amount);

    const totalProducts = productAmount.reduce((acc, curr) => acc + curr, 0);

    return { ...state, total_products: totalProducts };
  }

  if (action.type === COUNT_CART_SUBTOTAL) {
    const totalPrices = state.cart.map(({ price, discountPer, amount }) => {
      let prices: number;

      if (!discountPer)
        prices = price * amount;
      else prices = (price - (price * discountPer) / 100) * amount;

      return prices;
    });

    const finalSubTotal = totalPrices.reduce((acc, curr) => acc + curr, 0);

    return { ...state, subTotal: formatPrice(finalSubTotal) };
  }

  if (action.type === TOGGLE_CART_AMOUNT) {
    const { id, value } = action.payload;

    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        let newAmount: number;
        if (value === "inc") {
          newAmount = item.amount + 1;

          if (newAmount > item.max) {
            newAmount = item.max;
          }

          return { ...item, amount: newAmount };
        }

        if (value === "dec") {
          newAmount = item.amount - 1;

          if (newAmount < 1) {
            newAmount = 1;
          }

          return { ...item, amount: newAmount };
        }
      }
      return item;
    });

    return { ...state, cart: tempCart };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
}

export default CartReducer;
