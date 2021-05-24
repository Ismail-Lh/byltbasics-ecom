import { useRef, useState } from 'react';
import classes from './NavBarIcons.module.scss';

import { MyLink } from '../../../components';
import { Icons } from '../../../utils/constants';
import { CartIcon } from '../../../Icons';
import { useCartContext } from '../../../contexts/cart_context';

const NavBarIcons = () => {
  const [showInput, setShowInput] = useState(false);
  const { openCart } = useCartContext();

  const toggleInput = () => setShowInput(!showInput);

  return (
    <>
      <div className={classes.navbar__icons_1}>
        {showInput && (
          <form className={classes.navbar__form}>
            <input type='text' placeholder='search' />
          </form>
        )}

        {Icons.map(({ id, icon, route, search }) => (
          <MyLink
            route={route}
            key={id}
            handelClick={search ? toggleInput : openCart}>
            {icon}
          </MyLink>
        ))}
      </div>
      <button className={classes.navbar__icons_2} onClick={openCart}>
        <CartIcon />
      </button>
    </>
  );
};

export default NavBarIcons;
