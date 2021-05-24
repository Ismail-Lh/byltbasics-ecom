import { ADD_TO_CART } from '../utils/actions';

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

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default CartReducer;
