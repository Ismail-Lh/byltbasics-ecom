import dynamic from 'next/dynamic';

import classes from './NavBar.module.scss';

import NavBarLogo from './NavBarLogo/NavBarLogo';
import NavBarIcons from './NavBarIcons/NavBarIcons';
import NavBarLinks from './NavBarLinks/NavBarLinks';

const DynamicCart = dynamic(() => import('../Cart/Cart'));
const DynamicMobileMenu = dynamic(() => import('../MobileMenu/MobileMenu'));

const NavBar = () => {
  return (
    <nav className={classes.navbar}>
      <div className='container'>
        <div className={classes.navbar__items}>
          <NavBarLinks />

          <NavBarLogo />

          <NavBarIcons />
        </div>
      </div>

      <DynamicMobileMenu />

      <DynamicCart />
    </nav>
  );
};

export default NavBar;
