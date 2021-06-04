import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS,
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

  if (action.type === GET_PRODUCTS) {
    const { men: menProducts, women: womenProducts, loading } = action.payload;

    return {
      ...state,
      men_products: [...menProducts],
      women_products: [...womenProducts],
      loading,
    };
  }

  if (action.type === GET_POPULAR_PRODUCTS) {
    const { men_products, women_products } = state;

    const popularProducts = products =>
      products?.filter(product => product.popularity === true);

    return {
      ...state,
      popular_products: [
        {
          men: [...popularProducts(men_products)],
          women: [...popularProducts(women_products)],
        },
      ],
    };
  }

  if (action.type === GET_SINGLE_PRODUCT) {
    const { productId, gender, color } = action.payload;
    const { women_products, men_products } = state;

    let singleProduct = {};

    const getSingleProduct = products =>
      products?.filter(product => product.id === productId);

    if (gender === 'men') {
      singleProduct = getSingleProduct(men_products);
    }

    if (gender === 'women') {
      singleProduct = getSingleProduct(women_products);
    }

    return {
      ...state,
      single_product: {
        productInfo: { ...singleProduct[0] },
        productColor: color,
      },
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default ProductsReducer;
