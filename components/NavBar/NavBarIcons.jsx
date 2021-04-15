import classes from './NavBar.module.scss';

import { CartIcon, SearchIcon, ContactIcon, LoginIcon } from '../../Icons';
import { MyLink } from '../../components';

const NavBarIcons = () => {
  return (
    <div className={classes.navbar__icons}>
      <MyLink route='/'>
        <SearchIcon />
      </MyLink>

      <MyLink route='/'>
        <ContactIcon />
      </MyLink>

      <MyLink route='/'>
        <LoginIcon />
      </MyLink>

      <MyLink route='/'>
        <CartIcon />
      </MyLink>
    </div>
  );
};

export default NavBarIcons;
