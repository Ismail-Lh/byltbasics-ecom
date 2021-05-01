import { useProductsContext } from '../../contexts/products_context';
import { CartIcon, CloseIcon, SearchIcon } from '../../Icons';

const MobileMenu = () => {
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
