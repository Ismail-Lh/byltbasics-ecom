import { motion } from 'framer-motion';
import Link from 'next/link';

import classes from './MobileMenu.module.scss';
import { useFiltersContext } from '../../contexts/filters_context';

import { useProductsContext } from '../../contexts/products_context';
import { CartIcon, CloseIcon, SearchIcon } from '../../Icons';
import { NavbarLinks } from '../../utils/constants';

const MobileMenu = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  const { updateCollection } = useFiltersContext();

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  };

  return (
    <motion.div
      className={classes.mobileMenu}
      variants={menuVariants}
      animate={`${isSidebarOpen ? 'open' : 'closed'}`}>
      <div className={classes.mobileMenu__icons}>
        <button type='button' onClick={closeSidebar}>
          <CloseIcon />
        </button>
        <button type='button'>
          <CartIcon />
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
    </motion.div>
  );
};

export default MobileMenu;
