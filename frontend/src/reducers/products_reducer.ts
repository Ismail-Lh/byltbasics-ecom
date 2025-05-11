import {
  CLOSE_PRODUCT_MODAL,
  GET_POPULAR_PRODUCTS,
  GET_PRODUCTS,
  GET_PRODUCT_COLOR,
  GET_SIMILAR_PRODUCTS,
  GET_SINGLE_PRODUCT,
  OPEN_PRODUCT_MODAL,
  SIDEBAR_CLOSE,
  SIDEBAR_OPEN,
} from "../utils/actions";

interface Product {
  id: number;
  name: string;
  popularity: boolean;
  collections: string[];
}

interface State {
  isSidebarOpen: boolean;
  isProductModalOpen: boolean;
  men_products: Product[];
  women_products: Product[];
  loading: boolean;
  popular_products: {
    men: Product[];
    women: Product[];
  }[];
  single_product: {
    productInfo: Product;
    productColor: string;
  };
  similar_products: Product[];
}

type Action =
  | { type: "SIDEBAR_OPEN" }
  | { type: "SIDEBAR_CLOSE" }
  | { type: "OPEN_PRODUCT_MODAL" }
  | { type: "CLOSE_PRODUCT_MODAL" }
  | {
      type: "GET_PRODUCTS";
      payload: { men: Product[]; women: Product[]; loading: boolean };
    }
  | { type: "GET_POPULAR_PRODUCTS" }
  | {
      type: "GET_SINGLE_PRODUCT";
      payload: { productId: number; gender: string; color: string };
    }
  | {
      type: "GET_SIMILAR_PRODUCTS";
      payload: { collection: string; gender: string; productId: number };
    };

const ProductsReducer = (state: State, action: Action): State => {
  if (action.type === "SIDEBAR_OPEN") {
    return { ...state, isSidebarOpen: true };
  }

  if (action.type === "SIDEBAR_CLOSE") {
    return { ...state, isSidebarOpen: false };
  }

  if (action.type === "OPEN_PRODUCT_MODAL") {
    return { ...state, isProductModalOpen: true };
  }

  if (action.type === "CLOSE_PRODUCT_MODAL") {
    return { ...state, isProductModalOpen: false };
  }

  if (action.type === "GET_PRODUCTS") {
    const { men, women, loading } = action.payload;

    return {
      ...state,
      men_products: [...men],
      women_products: [...women],
      loading: loading,
    };
  }

  if (action.type === "GET_POPULAR_PRODUCTS") {
    const { men_products, women_products } = state;

    const popularProducts = (products: Product[]) =>
      products?.filter((product) => product.popularity === true);

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

  if (action.type === "GET_SINGLE_PRODUCT") {
    const { productId, gender, color } = action.payload;
    const { women_products, men_products } = state;

    let singleProduct = {};

    const getSingleProduct = (products: Product[]) =>
      products?.filter((product) => product.id === productId);

    if (gender === "men") {
      singleProduct = getSingleProduct(men_products);
    }

    if (gender === "women") {
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

  if (action.type === "GET_SIMILAR_PRODUCTS") {
    const { collection, gender, productId } = action.payload;
    const { men_products, women_products } = state;

    let similarProducts = [];

    const getSimilarProducts = (products) =>
      products
        ?.filter((product) => product.collections === collection)
        .filter((product) => product.id !== productId);

    if (gender === "men") {
      similarProducts = getSimilarProducts(men_products);
    }

    if (gender === "women") {
      similarProducts = getSimilarProducts(women_products);
    }

    return { ...state, similar_products: similarProducts };
  }

  // throw new Error(`No Matching "${action.type}" - action type`);
};

export default ProductsReducer;
