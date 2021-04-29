import { useState } from 'react';
import classes from './NavBar.module.scss';

import { MobileMenu } from '..';
import NavBarIcons from './NavBarIcons/NavBarIcons';
import NavBarLinks from './NavBarLinks/NavBarLinks';
import NavBarLogo from './NavBarLogo/NavBarLogo';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => setShowMenu(true);

  const hideMenu = () => setShowMenu(false);

  return (
    <nav className={classes.navbar}>
      <div className='container'>
        <div className={classes.navbar__items}>
          <NavBarLinks openMenu={openMenu} />

          <NavBarLogo />

          <NavBarIcons />
        </div>
      </div>

      <MobileMenu hideMenu={hideMenu} showMenu={showMenu} />
    </nav>
  );
};

export default NavBar;
