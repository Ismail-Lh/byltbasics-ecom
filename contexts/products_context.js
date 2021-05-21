import React, { useContext, createContext, useReducer, useEffect } from 'react';
import useFirebaseData from '../hooks/useFirebaseData';

import ProductsReducer from '../reducers/products_reducer';
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_MEN_PRODUCTS,
  GET_WOMEN_PRODUCTS,
  GET_POPULAR_PRODUCTS,
  GET_SINGLE_PRODUCT,
} from '../utils/actions';
import { getLocalStorage, setLocalStorage } from '../utils/helpers';

const ProductsContext = createContext();

const initialState = {
  isSidebarOpen: false,
  men_products: [],
  women_products: [],
  // gender: 'men',
  loading: false,
  popular_products: [],
  single_product: getLocalStorage('singleProduct'),
};

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);
  const { men, loading } = useFirebaseData('men');
  const { women } = useFirebaseData('women');

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  // Get menProducts
  useEffect(() => {
    dispatch({
      type: GET_MEN_PRODUCTS,
      payload: { men, loading },
    });
  }, [men]);

  // Get womenProducts
  useEffect(() => {
    dispatch({
      type: GET_WOMEN_PRODUCTS,
      payload: { women, loading },
    });
  }, [women]);

  // Get womenProducts
  useEffect(() => {
    dispatch({
      type: GET_POPULAR_PRODUCTS,
      payload: {
        womenProducts: state.women_products,
        menProducts: state.men_products,
      },
    });
  }, [state.women_products, state.men_products]);

  const getSingleProduct = (productId, gender, color) => {
    dispatch({
      type: GET_SINGLE_PRODUCT,
      payload: { productId, gender, color },
    });
  };

  useEffect(() => {
    setLocalStorage('singleProduct', state.single_product);
  }, [state.single_product]);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        getSingleProduct,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
