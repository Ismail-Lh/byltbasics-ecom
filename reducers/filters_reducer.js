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
    const { route, title } = action.payload;

    return { ...state, collection: { route, title } };
  }

  if (action.type === GET_PRODUCTS_BY_COLLECTION) {
    const { men_products, women_products } = action.payload;
    const { collection } = state;

    let products = [];

    const allProducts = [...men_products, ...women_products];
    const salesProducts = allProducts.filter(product => product.discountPer);

    // Get products by their collection
    const getProductsByCollection = (collection, prd) =>
      prd.filter(product => product.collections === collection);

    // Get products by their style
    const getProductsByStyle = (style, prd) =>
      prd.filter(product => product.style === style);

    // Get products their neck style
    const getProductsByNeck = (neck, prd) =>
      prd.filter(product => product.neck === neck);

    // Get products by their cut style
    const getProductsByCut = (cut, prd) =>
      prd.filter(product => product.cut === cut);

    // Get products by their sleeve style
    const getProductsBySleeve = (sleeve, prd) =>
      prd.filter(product => product.sleeve === sleeve);

    // Men's products collection
    if (collection.route === 'shop-men') products = men_products;

    // Men's tops products collection
    if (collection.route === 'mens-tops')
      products = getProductsByCollection('mens-tops', men_products);

    // Men's bottoms products collection
    if (collection.route === 'mens-bottoms')
      products = getProductsByCollection('mens-bottoms', men_products);

    // Men's outerwear products collection
    if (collection.route === 'mens-outerwear')
      products = getProductsByCollection('outerwear', men_products);

    // Men's outerwear products collection
    if (collection.route === 'mens-underwear')
      products = getProductsByCollection('underwear', men_products);

    // Men's outerwear products collection
    if (collection.route === 'mens-accessories')
      products = getProductsByCollection('hats-accessories', men_products);

    // Men's henleys products collection
    if (collection.route === 'mens-henleys')
      products = getProductsByStyle('henleys', men_products);

    // Men's henleys products collection
    if (collection.route === 'mens-shorts')
      products = getProductsByStyle('shorts', men_products);

    // Men's pullovers products collection
    if (collection.route === 'mens-pullovers')
      products = getProductsByStyle('pullovers', men_products);

    // Men's hats products collection
    if (collection.route === 'mens-hats')
      products = getProductsByStyle('hats', men_products);

    // Men's boxer briefs products collection
    if (collection.route === 'boxer-briefs')
      products = getProductsByStyle('boxer briefs', men_products);

    // Men's v-necks products collection
    if (collection.route === 'mens-vnecks')
      products = getProductsByNeck('v-necks', men_products);

    // Men's crews products collection
    if (collection.route === 'mens-crews')
      products = getProductsByNeck('crews', men_products);

    // Men's drop-cuts products collection
    if (collection.route === 'mens-drop-cuts')
      products = getProductsByCut('drop-cuts', men_products);

    // Men's long-sleeves products collection
    if (collection.route === 'mens-long-sleeves')
      products = getProductsBySleeve('long sleeves', men_products);

    // Women's products collections
    if (collection.route === 'shop-women') products = women_products;
    if (collection.route === 'bundles') products = women_products;
    if (collection.route === 'sales') products = salesProducts;

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
      tempProducts = tempProducts.sort((curr, next) => next.date - curr.date);
    }

    if (sort === 'old-new') {
      tempProducts = tempProducts.sort((curr, next) => curr.date - next.date);
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
