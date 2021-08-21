import Link from 'next/link';

import classes from './MobileMenu.module.scss';
import { useFiltersContext } from '../../contexts/filters_context';

import { useProductsContext } from '../../contexts/products_context';
import { CartIcon, CloseIcon, SearchIcon } from '../../Icons';
import { NavbarLinks } from '../../utils/constants';

const MobileMenu = () => {
  const { closeSidebar } = useProductsContext();
  const { updateCollection } = useFiltersContext();

  return (
    <div className={classes.mobileMenu}>
      <div className={classes.mobileMenu__icons}>
        <button type='button' onClick={closeSidebar}>
          <CloseIcon />
        </button>
      </div>

      <form className={classes.mobileMenu__form}>
        <input type='text' placeholder='search' />
        <SearchIcon />
      </form>

      <ul className={classes.mobileMenu__list}>
        {NavbarLinks.map(({ id, link, route }) => (
          <li
            key={id}
            onClick={() => {
              updateCollection(link);
              closeSidebar();
            }}>
            <Link href={`/collections/${route}`}>{link}</Link>
          </li>
        ))}
        <li onClick={closeSidebar}>
          <Link href='/account/login'>login</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
