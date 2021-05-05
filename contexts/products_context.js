import React, { useContext, createContext, useReducer, useEffect } from 'react';
import useFirebaseData from '../hooks/useFirebaseData';

import ProductsReducer from '../reducers/products_reducer';
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_MEN_PRODUCTS,
  GET_WOMEN_PRODUCTS,
  GET_POPULAR_PRODUCTS,
} from '../utils/actions';

const ProductsContext = createContext();

const initialState = {
  isSidebarOpen: false,
  men_products: [],
  women_products: [],
  gender: 'men',
  loading: false,
  popular_products: [],
};

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);
  const { men, loading } = useFirebaseData('men');
  const { women } = useFirebaseData('women');

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

  const getPopularProducts = products => {
    dispatch({ type: GET_POPULAR_PRODUCTS, payload: products });
  };

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  return (
    <ProductsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, getPopularProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
