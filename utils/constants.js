import { v4 as uuidv4 } from 'uuid';
import { CartIcon, SearchIcon, ContactIcon, LoginIcon } from '../Icons';

export const NavbarLinks = [
  { id: uuidv4(), link: 'men', route: 'shop-men' },
  { id: uuidv4(), link: 'women', route: 'shop-women' },
  { id: uuidv4(), link: 'bundles', route: 'bundles' },
  { id: uuidv4(), link: 'last call', route: 'sales' },
];

export const Icons = [
  { id: uuidv4(), icon: <SearchIcon />, search: true },
  { id: uuidv4(), icon: <ContactIcon />, route: 'contact-us' },
  { id: uuidv4(), icon: <LoginIcon />, route: 'account/login' },
  { id: uuidv4(), icon: <CartIcon /> },
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
