import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

import classes from './NavBar.module.scss';

import { useCartContext } from '../../contexts/cart_context';
import { useProductsContext } from '../../contexts/products_context';

import NavBarLogo from './NavBarLogo/NavBarLogo';
import NavBarIcons from './NavBarIcons/NavBarIcons';
import NavBarLinks from './NavBarLinks/NavBarLinks';

const DynamicMobileMenu = dynamic(() => import('../MobileMenu/MobileMenu'));
const DynamicCart = dynamic(() => import('../Cart/Cart'));

const NavBar = () => {
  const { isCartOpen } = useCartContext();
  const { isSidebarOpen } = useProductsContext();

  return (
    <nav className={classes.navbar}>
      <div className='container'>
        <div className={classes.navbar__items}>
          <NavBarLinks />

          <NavBarLogo />

          <NavBarIcons />
        </div>
      </div>

      {isSidebarOpen && <DynamicMobileMenu />}

      {isCartOpen && <DynamicCart />}
    </nav>
  );
};

export default NavBar;
