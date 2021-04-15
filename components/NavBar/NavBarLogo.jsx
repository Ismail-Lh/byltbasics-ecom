import classes from './NavBar.module.scss';
import { MyLink } from '../../components';

const NavBarLogo = () => {
  return (
    <div className={classes.logo}>
      <MyLink route='/'>
        <img
          src='/assets/Bylt-Logo.png'
          alt='Bylt-Logo'
          className={classes.logo__img}
        />
      </MyLink>
    </div>
  );
};

export default NavBarLogo;
