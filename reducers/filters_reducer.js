import {
  GET_PRODUCTS_BY_GENDER,
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
  if (action.type === GET_PRODUCTS_BY_GENDER) {
    const products = action.payload;

    return {
      ...state,
      products_by_gender: products,
      filtered_products: products,
    };
  }

  if (action.type === UPDATE_SORT) {
    const value = action.payload;

    console.log(value);

    return { ...state, sort: value };
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
    const { products_by_gender: products } = state;
    const { collections, cut, neck, sleeve, fabric } = state.filters;

    let tempProducts = [...products];

    if (collections !== 'all') {
      tempProducts = tempProducts
        ?.map(product => product)
        ?.filter(product => product.collections.toLowerCase() === collections);
    }

    if (cut !== 'all') {
      tempProducts = tempProducts
        ?.map(product => product)
        ?.filter(product => product.cut.toLowerCase() === cut);
    }

    if (neck !== 'all') {
      tempProducts = tempProducts
        ?.map(product => product)
        ?.filter(product => product.neck.toLowerCase() === neck);
    }

    if (sleeve !== 'all') {
      tempProducts = tempProducts
        ?.map(product => product)
        ?.filter(product => product.sleeve.toLowerCase() === sleeve);
    }

    if (fabric !== 'all') {
      tempProducts = tempProducts
        ?.map(product => product)
        ?.filter(product => product.fabric.toLowerCase() === fabric);
    }

    return { ...state, filtered_products: tempProducts };
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        collections: 'all',
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
