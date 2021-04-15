import classes from './NavBar.module.scss';

import NavBarIcons from './NavBarIcons';
import NavBarList from './NavBarList';
import NavBarLogo from './NavBarLogo';

const NavBar = () => {
  return (
    <div className='container'>
      <nav className={classes.navbar}>
        <NavBarList />

        <NavBarLogo />

        <NavBarIcons />
      </nav>
    </div>
  );
};

export default NavBar;
