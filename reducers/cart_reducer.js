import { ADD_TO_CART } from '../utils/actions';

const CartReducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { amount, size, color, id, product } = action.payload;

    console.log(amount, size, color, id, product);

    return { ...state };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default CartReducer;
