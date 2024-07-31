import type React from "react";
import { createContext, useContext, useEffect, useReducer } from "react";

import FiltersReducer from "../reducers/filters_reducer";
import { getLocalStorage, setLocalStorage } from "../utils/helpers";
import { useProductsContext } from "./products_context";

import type { Collection, Product } from "../types";
import {
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
  GET_PRODUCTS_BY_COLLECTION,
  SORT_PRODUCTS,
  UPDATE_COLLECTION,
  UPDATE_FILTERS,
  UPDATE_SORT,
} from "../utils/actions";

type FilterContextType = {
  collection: Collection;
  products: Product[];
  filtered_products: Product[];
  sort: string;
  filters: {
    collections: string;
    style: string;
    cut: string;
    neck: string;
    sleeve: string;
    fabric: string;
  };
  updateCollection: (route: string, title?: string) => void;
  updateSort: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  updateFilters: (type: string, value: string) => void;
  clearFilters: () => void;
};

const FiltersContext = createContext<FilterContextType | null>(null);

const initialState = {
  collection: getLocalStorage("collection"),
  products: [],
  filtered_products: [],
  sort: "sort by",
  filters: {
    collections: "all",
    style: "all",
    cut: "all",
    neck: "all",
    sleeve: "all",
    fabric: "all",
  },
};

type FiltersProviderProps = {
  children: React.ReactNode;
};

export const FiltersProvider = ({ children }: FiltersProviderProps) => {
  const [state, dispatch] = useReducer(FiltersReducer, initialState);
  const { men_products, women_products } = useProductsContext();

  const updateCollection = (route: string, title?: string) => {
    dispatch({ type: UPDATE_COLLECTION, payload: { route, title } });
  };

  useEffect(() => {
    dispatch({
      type: GET_PRODUCTS_BY_COLLECTION,
      payload: { men_products, women_products },
    });

    setLocalStorage("collection", state.collection);
  }, [state.collection, men_products, women_products]);

  const updateSort = (e: { target: { value: string } }) => {
    const { value } = e.target;

    dispatch({ type: UPDATE_SORT, payload: value });
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    dispatch({ type: SORT_PRODUCTS });
  }, [state.sort]);

  const updateFilters = (type: string, value: string) => {
    dispatch({ type: UPDATE_FILTERS, payload: { type, value } });
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
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
        updateCollection,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export const useFiltersContext = () => {
  const context = useContext(FiltersContext);

  if (!context) {
    throw new Error("useFiltersContext must be used within a FiltersProvider");
  }

  return context;
};
