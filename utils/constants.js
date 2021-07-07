import { v4 as uuidv4 } from 'uuid';

export const NavbarLinks = [
  { id: uuidv4(), link: 'men', route: 'shop-men' },
  { id: uuidv4(), link: 'women', route: 'shop-women' },
  { id: uuidv4(), link: 'bundles', route: 'bundles' },
  { id: uuidv4(), link: 'last call', route: 'sales' },
];

export const menCollections = [
  { id: uuidv4(), collection: 'new releases', route: 'new' },
  { id: uuidv4(), collection: 'snow wash collection', route: 'snow-wash' },
  {
    id: uuidv4(),
    collection: 'performance collection',
    route: 'performance-collection',
  },
  {
    id: uuidv4(),
    collection: 'executive collection',
    route: 'executive-collection',
  },
  { id: uuidv4(), collection: 'kids collection', route: 'kids-collection' },
  { id: uuidv4(), collection: 'bundles', route: 'mens-bundles' },
  { id: uuidv4(), collection: 'shop all', route: 'shop-men' },
];

export const womenCollections = [
  { id: uuidv4(), collection: 'bundles', route: 'womens-bundles' },
  { id: uuidv4(), collection: 'kids collection', route: 'kids-collection' },
  { id: uuidv4(), collection: 'shop all', route: 'shop-men' },
];

export const menCategories = [
  {
    id: uuidv4(),
    gender: 'men',
    productCategory: {
      category: 'tops',
      route: 'mens-tops',
      collection: 'mens-tops',
    },
    productTypes: [
      {
        type: 'drop cuts',
        route: 'drop-cuts',
        collection: 'mens-drop-cuts',
        id: uuidv4(),
      },
      {
        type: 'long sleeves',
        route: 'long-sleeves',
        collection: 'mens-long-sleeves',
        id: uuidv4(),
      },
      {
        type: 'tanks',
        route: 'tanks',
        collection: 'mens-tanks',
        id: uuidv4(),
      },
      {
        type: 'henleys',
        route: 'henleys',
        collection: 'mens-henleys',
        id: uuidv4(),
      },
      {
        type: 'dotted pattern',
        route: 'dotted-pattern',
        collection: 'mens-dotted-pattern',
        id: uuidv4(),
      },
      {
        type: 'striped pattern',
        route: 'striped-pattern',
        collection: 'mens-striped-pattern',
        id: uuidv4(),
      },
      {
        type: 'v-necks',
        route: 'v-necks',
        collection: 'mens-vnecks',
        id: uuidv4(),
      },
      {
        type: 'crews',
        route: 'crews',
        collection: 'mens-crews',
        id: uuidv4(),
      },
      {
        type: 'polos',
        route: 'polos',
        collection: 'mens-polos',
        id: uuidv4(),
      },
      {
        type: 'executive collection',
        route: 'executive-collection',
        collection: 'executive-collection',
        id: uuidv4(),
      },
    ],
  },
  {
    id: uuidv4(),
    gender: 'men',
    productCategory: {
      category: 'bottoms',
      route: 'mens-bottoms',
      collection: 'mens-bottoms',
    },
    productTypes: [
      {
        type: 'shorts',
        route: 'shorts',
        collection: 'mens-shorts',
        id: uuidv4(),
      },
      {
        type: 'pants',
        route: 'pants',
        collection: 'mens-pants',
        id: uuidv4(),
      },
    ],
  },
  {
    id: uuidv4(),
    gender: 'men',
    productCategory: {
      category: 'outerwear',
      route: 'outerwear',
      collection: 'mens-outerwear',
    },
    productTypes: [
      {
        type: 'pullovers',
        route: 'pullovers',
        collection: 'mens-pullovers',
        id: uuidv4(),
      },
      {
        type: 'jackets',
        route: 'jackets',
        collection: 'mens-jackets',
        id: uuidv4(),
      },
    ],
  },
  {
    id: uuidv4(),
    gender: 'men',
    productCategory: {
      category: 'underwear',
      route: 'underwear',
      collection: 'mens-underwear',
    },
    productTypes: [
      {
        type: 'boxer briefs',
        route: 'boxer-briefs',
        collection: 'boxer-briefs',
        id: uuidv4(),
      },
      {
        type: 'trunks',
        route: 'trunks',
        collection: 'mens-trunks',
        id: uuidv4(),
      },
    ],
  },
  {
    id: uuidv4(),
    gender: 'men',
    productCategory: {
      category: 'hats & accessories',
      route: 'hats-accessories',
      collection: 'accessories',
    },
    productTypes: [
      { type: 'hats', route: 'hats', collection: 'hats', id: uuidv4() },
      { type: 'socks', route: 'socks', collection: 'socks', id: uuidv4() },
    ],
  },
];

export const womenCategories = [
  {
    id: uuidv4(),
    gender: 'women',
    productCategory: {
      category: 'tops',
      route: 'womens-tops',
      collection: 'womens-tops',
    },
  },
  {
    id: uuidv4(),
    gender: 'women',
    productCategory: {
      category: 'bottoms',
      route: 'womens-bottoms',
      collection: 'womens-bottoms',
    },
    productTypes: [
      {
        type: 'joggers',
        route: 'joggers',
        collection: 'womens-joggers',
        id: uuidv4(),
      },
    ],
  },
  {
    id: uuidv4(),
    gender: 'women',
    productCategory: {
      category: 'hats & accessories',
      route: 'hats-accessories',
      collection: 'accessories',
    },
    productTypes: [
      { type: 'hats', route: 'hats', collection: 'hats', id: uuidv4() },
    ],
  },
];

export const HeroData = [
  {
    title: 'the spring collection',
    subtitle: 'Newly Refreshed. Refined Comfort.',
    imgUrlDesktop: 'hero-1.jpg',
    imgUrlMobile: 'hero-1-mobile.jpg',
    position: 'right',
    color: '#fff',
    route: '/collections/spring-collection',
    id: uuidv4(),
  },
  {
    title: 'performance collection',
    subtitle: 'pushing the limits',
    imgUrlDesktop: 'hero-2.jpg',
    imgUrlMobile: 'hero-2-mobile.jpg',
    position: 'center',
    color: '#fff',
    route: '/collections/performance-collection',
    id: uuidv4(),
  },
  {
    title: 'step into premium',
    subtitle: 'introducing: the everyday shoe',
    imgUrlDesktop: 'hero-3.jpg',
    imgUrlMobile: 'hero-3-mobile.jpg',
    position: 'left',
    color: '#25293b',
    route: '/products/everyday-shoes',
    id: uuidv4(),
  },
  {
    title: 'new in stock hooded henleys',
    subtitle: "it's time to earn your stripes",
    imgUrlDesktop: 'hero-4.jpg',
    imgUrlMobile: 'hero-4-mobile.jpg',
    position: 'center',
    color: '#000',
    route: '/products/drop-cut-lux-hooded-henley',
    id: uuidv4(),
  },
];

export const ProductsCategoryData_1 = [
  {
    category: 'long sleeves',
    imgUrl: '/assets/long-sleeves.jpg',
    route: '/collections/long-sleeves',
    id: uuidv4(),
  },
  {
    category: 'board shorts',
    imgUrl: '/assets/board-shorts.jpg',
    route: '/products/coastal-board-shorts',
    id: uuidv4(),
  },
  {
    category: 'tanks',
    imgUrl: '/assets/tanks.jpg',
    route: '/collections/tanks',
    id: uuidv4(),
  },
  {
    category: 'weekender shorts',
    imgUrl: '/assets/weekender-shorts.jpg',
    route: '/products/weekender-shorts',
    id: uuidv4(),
  },
];

export const ProductsCategoryData_2 = [
  {
    category: 'drop-cuts',
    imgUrl: '/assets/drop-cuts.jpg',
    route: '/collections/drop-cuts',
    id: uuidv4(),
  },
  {
    category: 'split helms',
    imgUrl: '/assets/split-helms.jpg',
    route: '/products/lux-basic-crew-split-hem',
    id: uuidv4(),
  },
  {
    category: 'v-neck',
    imgUrl: '/assets/v-neck.jpg',
    route: '/collections/v-neck',
    id: uuidv4(),
  },
  {
    category: 'henleys',
    imgUrl: '/assets/henley.jpg',
    route: '/collections/henley',
    id: uuidv4(),
  },
  {
    category: 'tanks',
    imgUrl: '/assets/tanks-2.jpg',
    route: '/collections/tanks',
    id: uuidv4(),
  },
];
