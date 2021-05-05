import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_MEN_PRODUCTS,
} from '../utils/actions';

const ProductsReducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }

  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }

  if (action.type === GET_MEN_PRODUCTS) {
    const { men: menProducts, loading } = action.payload;

    return {
      ...state,
      men_products: [...menProducts],
      loading,
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default ProductsReducer;
