import classes from './NavBarLogo.module.scss';
import { MyLink } from '../../../components';

const NavBarLogo = () => {
  return (
    <div className={classes.navbar__logo}>
      <MyLink route='/'>
        <img src='/assets/Bylt-Logo.png' alt='Bylt-Logo' />
      </MyLink>
    </div>
  );
};

export default NavBarLogo;
