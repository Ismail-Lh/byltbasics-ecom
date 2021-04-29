import classes from './MobileMenu.module.scss';

import { Overlay } from '..';
import { CartIcon, CloseIcon, SearchIcon } from '../../Icons';

const MobileMenu = ({ hideMenu, showMenu }) => {
  return (
    <Overlay handelClick={hideMenu} showMenu={showMenu}>
      <div
        className={`${
          showMenu ? classes.mobile__menu_show : classes.mobile__menu_hide
        }`}>
        <div className={classes.mobile__menu_icons}>
          <CloseIcon />
          <CartIcon />
        </div>

        <form className={classes.mobile__menu_form}>
          <input type='text' placeholder='search' />
          <SearchIcon />
        </form>
      </div>
    </Overlay>
  );
};

export default MobileMenu;
