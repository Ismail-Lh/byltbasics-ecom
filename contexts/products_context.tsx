import type React from "react";
import { createContext, useContext, useEffect, useReducer } from "react";
import useFirebaseData from "../hooks/useFirebaseData";

import ProductsReducer from "../reducers/products_reducer";

import {
  CLOSE_PRODUCT_MODAL,
  GET_POPULAR_PRODUCTS,
  GET_PRODUCTS,
  GET_SIMILAR_PRODUCTS,
  GET_SINGLE_PRODUCT,
  OPEN_PRODUCT_MODAL,
  SIDEBAR_CLOSE,
  SIDEBAR_OPEN,
} from "../utils/actions";

import type { Gender, Product } from "../types";
import { getLocalStorage, setLocalStorage } from "../utils/helpers";

type SingleProduct = {
  productId: string;
  gender: string;
  color: string;
};

type SimilarProduct = {
  productId: string;
  collection: string;
  gender: string;
};

type ProductsProviderProps = {
  children: React.ReactNode;
};

type ProductsContextType = {
  isSidebarOpen: boolean;
  isProductModalOpen: boolean;
  openSidebar: () => void;
  loading: boolean;
  closeSidebar: () => void;
  openProductModal: () => void;
  closeProductModal: () => void;
  getSingleProduct: (singleProduct: SingleProduct) => void;
  getSimilarProducts: (similarProduct: SimilarProduct) => void;
  men_products: Product[];
  women_products: Product[];
  popular_products: Product[] | null;
  single_product: { single_product: Product; product_color: string };
  similar_products: Product[];
  product_color: string | null;
};

const ProductsContext = createContext<ProductsContextType | null>(null);

const initialState = {
  isSidebarOpen: false,
  isProductModalOpen: false,
  men_products: getLocalStorage("menProducts"),
  women_products: getLocalStorage("womenProducts"),
  loading: false,
  popular_products: [],
  single_product: getLocalStorage("singleProduct"),
  product_color: null,
  similar_products: getLocalStorage("similarProducts"),
};

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);
  const { men, loading } = useFirebaseData("men");
  const { women } = useFirebaseData("women");

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const openProductModal = () => {
    dispatch({ type: OPEN_PRODUCT_MODAL });
  };

  const closeProductModal = () => {
    dispatch({ type: CLOSE_PRODUCT_MODAL });
  };

  // Get menProducts && womenProducts
  useEffect(() => {
    dispatch({
      type: GET_PRODUCTS,
      payload: { men, women, loading },
    });
  }, [men, women, loading]);

  useEffect(() => {
    setLocalStorage("menProducts", state.men_products);
    setLocalStorage("womenProducts", state.women_products);
  }, [state.men_products, state.women_products]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    dispatch({
      type: GET_POPULAR_PRODUCTS,
    });
  }, [state.women_products, state.men_products]);

  const getSingleProduct = ({ productId, gender, color }: SingleProduct) => {
    dispatch({
      type: GET_SINGLE_PRODUCT,
      payload: { productId, gender, color },
    });
  };

  const getSimilarProducts = ({
    collection,
    gender,
    productId,
  }: SimilarProduct) => {
    dispatch({
      type: GET_SIMILAR_PRODUCTS,
      payload: { collection, gender, productId },
    });
  };

  useEffect(() => {
    setLocalStorage("singleProduct", state.single_product);
  }, [state.single_product]);

  useEffect(() => {
    setLocalStorage("similarProducts", state.similar_products);
  }, [state.similar_products]);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        openProductModal,
        closeProductModal,
        getSingleProduct,
        getSimilarProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  const context = useContext(ProductsContext);
  // Throw an error if the hook is used outside of the ProductsProvider
  if (!context)
    throw new Error(
      "useProductsContext must be used within the ProductsProvider!",
    );

  return context;
};
