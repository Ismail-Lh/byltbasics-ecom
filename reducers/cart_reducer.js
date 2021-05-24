import {
  ADD_TO_CART,
  CLOSE_CART,
  OPEN_CART,
  REMOVE_FROM_CART,
} from '../utils/actions';

const CartReducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { amount, size, color, id, product } = action.payload;

    const tempItem = state.cart.find(item => item.id === id + color + size);

    if (tempItem) {
      const tempCart = state.cart.map(cartItem => {
        if (cartItem.id === id + color + size) {
          let newAmount = cartItem.amount + amount;

          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }

          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });

      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id + color + size,
        name: product.name,
        type: product.type,
        category: product.category,
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
  }

  if (action.type === OPEN_CART) {
    return { ...state, isCartOpen: true };
  }

  if (action.type === CLOSE_CART) {
    return { ...state, isCartOpen: false };
  }

  if (action.type === REMOVE_FROM_CART) {
    const id = action.payload;

    const newCart = state.cart.filter(product => product.id !== id);

    return { ...state, cart: newCart };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default CartReducer;
