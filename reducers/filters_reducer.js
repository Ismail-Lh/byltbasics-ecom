import {
  GET_PRODUCTS_BY_GENDER,
  UPDATE_SORT,
  SORT_PRODUCTS,
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

    if (sort === 'price-lowest') {
      tempProducts = tempProducts.sort(
        (curr, next) =>
          itemPrice(curr.price, curr.discountPer) -
          itemPrice(next.price, next.discountPer)
      );
    } else if (sort === 'price-highest') {
      tempProducts = tempProducts.sort(
        (curr, next) =>
          itemPrice(next.price, next.discountPer) -
          itemPrice(curr.price, curr.discountPer)
      );
    } else if (sort === 'name-a') {
      tempProducts = tempProducts.sort((curr, next) =>
        curr.name.localeCompare(next.name)
      );
    } else if (sort === 'name-z') {
      tempProducts = tempProducts.sort((curr, next) =>
        next.name.localeCompare(curr.name)
      );
    }

    return { ...state, filtered_products: tempProducts };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default FiltersReducer;
