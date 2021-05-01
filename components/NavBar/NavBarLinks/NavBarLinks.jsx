import Link from 'next/link';
import classes from './NavBarLinks.module.scss';

import { NavbarLinks } from '../../../utils/constants';
import { useProductsContext } from '../../../contexts/products_context';
import { MenuIcon } from '../../../Icons';

const NavBarLinks = () => {
  const { openSidebar } = useProductsContext();
  return (
    <>
      <ul className={classes.navbar__list}>
        {NavbarLinks.map(({ id, link, route }) => (
          <li className={classes.navbar__links} key={id}>
            <Link href={`/collections/${route}`}>{link}</Link>
          </li>
        ))}
      </ul>
      <div className={classes.menu__icon}>
        <button type='button' onClick={openSidebar}>
          <MenuIcon />
        </button>
      </div>
    </>
  );
};

export default NavBarLinks;
