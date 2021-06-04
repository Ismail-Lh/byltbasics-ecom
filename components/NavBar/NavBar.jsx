import { useState } from 'react';
import classes from './NavBar.module.scss';

import { Cart, MobileMenu } from '..';
import NavBarIcons from './NavBarIcons/NavBarIcons';
import NavBarLinks from './NavBarLinks/NavBarLinks';
import NavBarLogo from './NavBarLogo/NavBarLogo';
import { useFiltersContext } from '../../contexts/filters_context';

const NavBar = () => {
  const { updateGender } = useFiltersContext();

  const handelUpdateGender = gender => {
    gender === 'men' && updateGender('men');
    gender === 'women' && updateGender('women');
  };

  return (
    <nav className={classes.navbar}>
      <div className='container'>
        <div className={classes.navbar__items}>
          <NavBarLinks handelUpdateGender={handelUpdateGender} />

          <NavBarLogo />

          <NavBarIcons />
        </div>
      </div>

      <MobileMenu handelUpdateGender={handelUpdateGender} />
      <Cart />
    </nav>
  );
};

export default NavBar;
