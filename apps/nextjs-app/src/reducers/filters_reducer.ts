// import type { Product } from "../types";
import {
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
  GET_PRODUCTS_BY_COLLECTION,
  SORT_PRODUCTS,
  UPDATE_COLLECTION,
  UPDATE_FILTERS,
  UPDATE_SORT,
} from "../utils/actions";

type Product = {
  collections: string;
  style: string;
  cut: string;
  neck: string;
  sleeve: string;
  fabric: string;
  price: number;
  discountPer?: number;
  snowWash?: boolean;
  performance?: boolean;
  exect?: boolean;
  summerDye?: boolean;
  newCore?: boolean;
  date: number;
  name: string;
};

type Collection = {
  route: string;
  title: string;
};

type FiltersState = {
  collection: Collection;
  products: Product[];
  filtered_products: Product[];
  sort:
    | string
    | {
      route: string;
      title: string;
      men_products: Product[];
      women_products: Product[];
    };
  filters: {
    collections: string;
    style: string;
    cut: string;
    neck: string;
    sleeve: string;
    fabric: string;
  };
};

type Action = {
  type: string;
  payload: {
    route: string;
    title: string;
    men_products: Product[];
    women_products: Product[];
    type: string;
    value: string;
  };
};

function itemPrice(price: number, discountPer?: number): number {
  if (!discountPer)
    return price;

  return price - (price * discountPer) / 100;
}

function FiltersReducer(state: FiltersState, action: Action): FiltersState {
  if (action.type === UPDATE_COLLECTION) {
    const { route, title } = action.payload;

    return { ...state, collection: { route, title } };
  }

  if (action.type === GET_PRODUCTS_BY_COLLECTION) {
    const { men_products, women_products } = action.payload;
    const { collection } = state;
    const route = collection?.route?.toLowerCase();

    let products: Product[] = [];

    const allProducts = [...men_products, ...women_products];
    const salesProducts = allProducts.filter(product => product.discountPer);

    const getProductsByCollection = (
      collection: string,
      prd: Product[],
    ): Product[] => prd.filter(product => product.collections === collection);

    const getProductsByStyle = (style: string, prd: Product[]): Product[] =>
      prd.filter(product => product.style === style);

    const getProductsByNeck = (neck: string, prd: Product[]): Product[] =>
      prd.filter(product => product.neck === neck);

    const getProductsByCut = (cut: string, prd: Product[]): Product[] =>
      prd.filter(product => product.cut === cut);

    const getProductsBySleeve = (sleeve: string, prd: Product[]): Product[] =>
      prd.filter(product => product.sleeve === sleeve);

    if (route === "shop-men")
      products = men_products;
    if (route === "mens-tops")
      products = getProductsByCollection("mens-tops", men_products);
    if (route === "mens-bottoms")
      products = getProductsByCollection("mens-bottoms", men_products);
    if (route === "mens-outerwear")
      products = getProductsByCollection("outerwear", men_products);
    if (route === "mens-underwear")
      products = getProductsByCollection("underwear", men_products);
    if (route === "accessories")
      products = getProductsByCollection("hats-accessories", allProducts);
    if (route === "mens-henleys")
      products = getProductsByStyle("henleys", men_products);
    if (route === "mens-tanks")
      products = getProductsByStyle("tanks", men_products);
    if (route === "mens-shorts")
      products = getProductsByStyle("shorts", men_products);
    if (route === "mens-pullovers")
      products = getProductsByStyle("pullovers", men_products);
    if (route === "hats")
      products = getProductsByStyle("hats", allProducts);
    if (route === "boxer-briefs")
      products = getProductsByStyle("boxer briefs", men_products);
    if (route === "mens-vnecks")
      products = getProductsByNeck("v-necks", men_products);
    if (route === "mens-crews")
      products = getProductsByNeck("crews", men_products);
    if (route === "mens-drop-cuts")
      products = getProductsByCut("drop-cuts", men_products);
    if (route === "mens-long-sleeves")
      products = getProductsBySleeve("long sleeves", men_products);
    if (route === "new")
      products = men_products.sort((curr, next) => next.date - curr.date);
    if (route === "snow-wash")
      products = men_products.filter(product => product.snowWash === true);
    if (route === "performance-collection")
      products = men_products.filter(product => product.performance === true);
    if (route === "executive-collection")
      products = men_products.filter(product => product.exect === true);
    if (route === "summer-dye-collection")
      products = men_products.filter(product => product.summerDye === true);
    if (route === "new-core-collection")
      products = men_products.filter(product => product.newCore === true);

    if (route === "shop-women")
      products = women_products;
    if (route === "womens-tops")
      products = getProductsByCollection("womens-tops", women_products);
    if (route === "womens-bottoms")
      products = getProductsByCollection("womens-bottoms", women_products);
    if (route === "womens-joggers")
      products = getProductsByStyle("joggers", women_products);
    if (route === "bundles")
      products = women_products;
    if (route === "sales")
      products = salesProducts;

    return {
      ...state,
      products,
      filtered_products: products,
    };
  }

  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }

  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    let tempProducts = [...filtered_products];

    if (sort === "price-lowest") {
      tempProducts = tempProducts.sort(
        (curr, next) =>
          itemPrice(curr.price, curr.discountPer)
          - itemPrice(next.price, next.discountPer),
      );
    }

    if (sort === "price-highest") {
      tempProducts = tempProducts.sort(
        (curr, next) =>
          itemPrice(next.price, next.discountPer)
          - itemPrice(curr.price, curr.discountPer),
      );
    }

    if (sort === "new-old") {
      tempProducts = tempProducts.sort((curr, next) => next.date - curr.date);
    }

    if (sort === "old-new") {
      tempProducts = tempProducts.sort((curr, next) => curr.date - next.date);
    }

    if (sort === "name-a") {
      tempProducts = tempProducts.sort((curr, next) =>
        curr.name.localeCompare(next.name),
      );
    }

    if (sort === "name-z") {
      tempProducts = tempProducts.sort((curr, next) =>
        next.name.localeCompare(curr.name),
      );
    }

    return { ...state, filtered_products: tempProducts };
  }

  if (action.type === UPDATE_FILTERS) {
    const { type, value } = action.payload;

    return { ...state, filters: { ...state.filters, [type]: value } };
  }

  if (action.type === FILTER_PRODUCTS) {
    const { products } = state;
    const { collections, style, cut, neck, sleeve, fabric } = state.filters;

    let tempProducts = [...products];

    if (collections !== "all") {
      tempProducts = tempProducts
        ?.map(product => product)
        ?.filter(
          product => product?.collections?.toLowerCase() === collections,
        );
    }

    if (style !== "all") {
      tempProducts = tempProducts
        ?.map(product => product)
        ?.filter(product => product?.style?.toLowerCase() === style);
    }

    if (cut !== "all") {
      tempProducts = tempProducts
        ?.map(product => product)
        ?.filter(product => product?.cut?.toLowerCase() === cut);
    }

    if (neck !== "all") {
      tempProducts = tempProducts
        ?.map(product => product)
        ?.filter(product => product?.neck?.toLowerCase() === neck);
    }

    if (sleeve !== "all") {
      tempProducts = tempProducts
        ?.map(product => product)
        ?.filter(product => product?.sleeve?.toLowerCase() === sleeve);
    }

    if (fabric !== "all") {
      tempProducts = tempProducts
        ?.map(product => product)
        ?.filter(product => product?.fabric?.toLowerCase() === fabric);
    }

    return { ...state, filtered_products: tempProducts };
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        collections: "all",
        style: "all",
        cut: "all",
        neck: "all",
        sleeve: "all",
        fabric: "all",
      },
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
}

export default FiltersReducer;
