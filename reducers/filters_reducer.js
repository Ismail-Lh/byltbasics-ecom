import {
  UPDATE_COLLECTION,
  GET_PRODUCTS_BY_COLLECTION,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../utils/actions';

const itemPrice = (price, discountPer) => {
  if (!discountPer) return price;

  return price - (price * discountPer) / 100;
};

const FiltersReducer = (state, action) => {
  if (action.type === UPDATE_COLLECTION) {
    return { ...state, collection: action.payload };
  }

  if (action.type === GET_PRODUCTS_BY_COLLECTION) {
    const { men_products, women_products } = action.payload;
    const { collection } = state;

    const allProducts = [...men_products, ...women_products];
    const salesProducts = allProducts.filter(product => product.discountPer);
    let products = [];

    if (collection === 'men') products = men_products;
    if (collection === 'women') products = women_products;
    if (collection === 'bundles') products = women_products;
    if (collection === 'last call') products = salesProducts;

    return {
      ...state,
      products: products,
      filtered_products: products,
    };
  }

  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }

  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    let tempProducts = [...filtered_products];

    if (sort === 'sort-by') {
      tempProducts = tempProducts;
    }

    if (sort === 'price-lowest') {
      tempProducts = tempProducts.sort(
        (curr, next) =>
          itemPrice(curr.price, curr.discountPer) -
          itemPrice(next.price, next.discountPer)
      );
    }

    if (sort === 'price-highest') {
      tempProducts = tempProducts.sort(
        (curr, next) =>
          itemPrice(next.price, next.discountPer) -
          itemPrice(curr.price, curr.discountPer)
      );
    }

    if (sort === 'new-old') {
      tempProducts = tempProducts.sort((curr, next) => curr.date - next.date);
    }

    if (sort === 'old-new') {
      tempProducts = tempProducts.sort((curr, next) => next.date - curr.date);
    }

    if (sort === 'name-a') {
      tempProducts = tempProducts.sort((curr, next) =>
        curr.name.localeCompare(next.name)
      );
    }

    if (sort === 'name-z') {
      tempProducts = tempProducts.sort((curr, next) =>
        next.name.localeCompare(curr.name)
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

    if (collections !== 'all') {
      tempProducts = tempProducts
        ?.map(product => product)
        ?.filter(
          product => product?.collections?.toLowerCase() === collections
        );
    }

    if (style !== 'all') {
      tempProducts = tempProducts
        ?.map(product => product)
        ?.filter(product => product?.style?.toLowerCase() === style);
    }

    if (cut !== 'all') {
      tempProducts = tempProducts
        ?.map(product => product)
        ?.filter(product => product?.cut?.toLowerCase() === cut);
    }

    if (neck !== 'all') {
      tempProducts = tempProducts
        ?.map(product => product)
        ?.filter(product => product?.neck?.toLowerCase() === neck);
    }

    if (sleeve !== 'all') {
      tempProducts = tempProducts
        ?.map(product => product)
        ?.filter(product => product?.sleeve?.toLowerCase() === sleeve);
    }

    if (fabric !== 'all') {
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
        collections: 'all',
        style: 'all',
        cut: 'all',
        neck: 'all',
        sleeve: 'all',
        fabric: 'all',
      },
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default FiltersReducer;
