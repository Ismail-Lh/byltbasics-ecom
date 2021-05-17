import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_MEN_PRODUCTS,
  GET_WOMEN_PRODUCTS,
  GET_POPULAR_PRODUCTS,
  GET_SINGLE_PRODUCT,
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

  if (action.type === GET_WOMEN_PRODUCTS) {
    const { women: womenProducts, loading } = action.payload;

    return {
      ...state,
      women_products: [...womenProducts],
      loading,
    };
  }

  if (action.type === GET_POPULAR_PRODUCTS) {
    const { womenProducts, menProducts } = action.payload;

    const menPopularProducts = menProducts?.filter(
      product => product.popularity === true
    );

    const womenPopularProducts = womenProducts?.filter(
      product => product.popularity === true
    );

    return {
      ...state,
      popular_products: [
        { men: [...menPopularProducts], women: [...womenPopularProducts] },
      ],
    };
  }

  if (action.type === GET_SINGLE_PRODUCT) {
    const { productId, gender, color } = action.payload;
    const { women_products, men_products } = state;

    let singleProduct = {};

    if (gender === 'men') {
      singleProduct = men_products?.filter(product => product.id === productId);
    } else if (gender === 'women') {
      singleProduct = women_products?.filter(
        product => product.id === productId
      );
    }

    return {
      ...state,
      single_product: singleProduct[0],
      product_color: color,
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default ProductsReducer;
