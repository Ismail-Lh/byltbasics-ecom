import dynamic from 'next/dynamic';
import classes from './NavBarLogo.module.scss';

const DynamicMyLink = dynamic(() =>
  import('../../../components/MyLink/MyLink')
);

const NavBarLogo = () => {
  return (
    <div className={classes.navbar__logo}>
      <DynamicMyLink route='/'>
        <img src='/assets/Bylt-Logo.png' alt='Bylt-Logo' />
      </DynamicMyLink>
    </div>
  );
};

export default NavBarLogo;
