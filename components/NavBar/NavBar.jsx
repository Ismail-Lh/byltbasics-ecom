import { useState } from 'react';
import classes from './NavBar.module.scss';

import { Cart, MobileMenu } from '..';
import NavBarIcons from './NavBarIcons/NavBarIcons';
import NavBarLinks from './NavBarLinks/NavBarLinks';
import NavBarLogo from './NavBarLogo/NavBarLogo';

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

      <MobileMenu />
      <Cart />
    </nav>
  );
};

export default NavBar;
