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
    imgUrlDesktop: '/assets/hero-1.jpg',
    imgUrlMobile: '/assets/hero-1-mobile.jpg',
    position: 'right',
    color: '#fff',
    route: '/collections/spring-collection',
    id: uuidv4(),
  },
  {
    title: 'performance collection',
    subtitle: 'pushing the limits',
    imgUrlDesktop: '/assets/hero-2.jpg',
    imgUrlMobile: '/assets/hero-2-mobile.jpg',
    position: 'center',
    color: '#fff',
    route: '/collections/performance-collection',
    id: uuidv4(),
  },
  {
    title: 'step into premium',
    subtitle: 'introducing: the everyday shoe',
    imgUrlDesktop: '/assets/hero-3.jpg',
    imgUrlMobile: '/assets/hero-3-mobile.jpg',
    position: 'left',
    color: '#25293b',
    route: '/collections/everyday-shoes',
    id: uuidv4(),
  },
  {
    title: 'new in stock hooded henleys',
    subtitle: "it's time to earn your stripes",
    imgUrlDesktop: '/assets/hero-4.jpg',
    imgUrlMobile: '/assets/hero-4-mobile.jpg',
    position: 'center',
    color: '#000',
    route: '/collections/hooded-henleys',
    id: uuidv4(),
  },
];
