import dynamic from 'next/dynamic';
import { useCartContext } from '../../contexts/cart_context';
import { useProductsContext } from '../../contexts/products_context';

import classes from './NavBar.module.scss';

import NavBarLogo from './NavBarLogo/NavBarLogo';
import NavBarIcons from './NavBarIcons/NavBarIcons';
import NavBarLinks from './NavBarLinks/NavBarLinks';

const DynamicCart = dynamic(() => import('../Cart/Cart'));
const DynamicMobileMenu = dynamic(() => import('../MobileMenu/MobileMenu'));

const NavBar = () => {
  const { isSidebarOpen } = useProductsContext();
  const { isCartOpen } = useCartContext();

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
