import Link from 'next/link';
import { useFiltersContext } from '../../contexts/filters_context';

import { useProductsContext } from '../../contexts/products_context';
import { CartIcon, CloseIcon, SearchIcon } from '../../Icons';
import { NavbarLinks } from '../../utils/constants';

const MobileMenu = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  const { updateCollection } = useFiltersContext();

  return (
    <div
      className={`${
        isSidebarOpen ? 'mobileMenu mobileMenu__show' : 'mobileMenu'
      }`}>
      <div className='mobileMenu__icons'>
        <button type='button' onClick={closeSidebar}>
          <CloseIcon />
        </button>
        <button type='button'>
          <CartIcon />
        </button>
      </div>

      <form className='mobileMenu__form'>
        <input type='text' placeholder='search' />
        <SearchIcon />
      </form>

      <ul className='mobileMenu__list'>
        {NavbarLinks.map(({ id, link, route }) => (
          <li
            key={id}
            className='mobileMenu__list-items'
            onClick={() => {
              updateCollection(link);
              closeSidebar();
            }}>
            <Link href={`/collections/${route}`}>{link}</Link>
          </li>
        ))}
        <li onClick={closeSidebar} className='mobileMenu__list-items'>
          <Link href='/account/login'>login</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
