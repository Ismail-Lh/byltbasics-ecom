import classes from './NavBar.module.scss';

import NavBarIcons from './NavBarIcons/NavBarIcons';
import NavBarLinks from './NavBarLinks/NavBarLinks';
import NavBarLogo from './NavBarLogo/NavBarLogo';

const NavBar = () => {
  return (
    <div className='container'>
      <nav className={classes.navbar}>
        <NavBarLinks />

        <NavBarLogo />

        <NavBarIcons />
      </nav>
    </div>
  );
};

export default NavBar;
