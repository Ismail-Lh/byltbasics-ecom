import React, { useContext, createContext, useReducer, useEffect } from 'react';

import FiltersReducer from '../reducers/filters_reducer';

const FiltersContext = createContext();

const initialState = {};

export const FiltersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FiltersReducer, initialState);

  return (
    <FiltersContext.Provider
      value={{
        ...state,
      }}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFiltersContext = () => {
  return useContext(FiltersContext);
};
