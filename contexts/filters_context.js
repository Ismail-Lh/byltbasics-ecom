import React, { useContext, createContext, useReducer, useEffect } from 'react';

import FiltersReducer from '../reducers/filters_reducer';
import {
  UPDATE_SORT,
  GET_PRODUCTS_BY_GENDER,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../utils/actions';
import { getLocalStorage, setLocalStorage } from '../utils/helpers';

const FiltersContext = createContext();

const initialState = {
  products_by_gender: getLocalStorage('productsByGender'),
  filtered_products: [],
  sort: 'price: low to hight',
  filters: {
    collections: 'all',
    cut: 'all',
    neck: 'all',
    sleeve: 'all',
    fabric: 'all',
  },
};

export const FiltersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FiltersReducer, initialState);

  const getProductsByGender = products => {
    dispatch({ type: GET_PRODUCTS_BY_GENDER, payload: products });
  };

  useEffect(() => {
    setLocalStorage('productsByGender', state.products_by_gender);
  }, [state.products_by_gender]);

  const updateSort = e => {
    const { value } = e.target;

    dispatch({ type: UPDATE_SORT, payload: value });
  };

  useEffect(() => {
    dispatch({ type: SORT_PRODUCTS });
  }, [state.sort]);

  const updateFilters = (type, value) => {
    dispatch({ type: UPDATE_FILTERS, payload: { type, value } });
  };

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
  }, [state.filters]);

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  return (
    <FiltersContext.Provider
      value={{
        ...state,
        getProductsByGender,
        updateSort,
        updateFilters,
        clearFilters,
      }}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFiltersContext = () => {
  return useContext(FiltersContext);
};
