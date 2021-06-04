import Link from 'next/link';

import { useProductsContext } from '../../contexts/products_context';
import { CartIcon, CloseIcon, SearchIcon } from '../../Icons';
import { NavbarLinks } from '../../utils/constants';

const MobileMenu = ({ handelUpdateGender }) => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();

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
              handelUpdateGender(link);
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

{
  /* <div className={classes.mobile__menu} onClick={() => hideMenu()}>
      <div className='overlay'></div>
      <div
        className={`${
          showMenu ? classes.mobile__menu_show : classes.mobile__menu_hide
        }`}>
        
      </div>
    </div> */
}
