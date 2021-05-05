import React, { useContext, createContext, useReducer, useEffect } from 'react';
import useFirebaseData from '../hooks/useFirebaseData';

import ProductsReducer from '../reducers/products_reducer';
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_MEN_PRODUCTS,
} from '../utils/actions';

const ProductsContext = createContext();

const initialState = {
  isSidebarOpen: false,
  men_products: [],
  gender: 'men',
  loading: false,
};

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);
  const { men, loading } = useFirebaseData('men');
  // // const { womenProducts } = useFirebaseData('women');

  // console.log(men);

  useEffect(() => {
    dispatch({
      type: GET_MEN_PRODUCTS,
      payload: { men, loading },
    });
  }, [men]);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
