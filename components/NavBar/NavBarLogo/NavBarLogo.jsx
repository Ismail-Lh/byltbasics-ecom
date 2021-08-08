import dynamic from 'next/dynamic';
import Image from 'next/image';

import classes from './NavBarLogo.module.scss';

const DynamicMyLink = dynamic(() =>
  import('../../../components/MyLink/MyLink')
);

const NavBarLogo = () => {
  return (
    <div className={classes.navbar__logo}>
      <DynamicMyLink route='/'>
        <Image
          src='/assets/Bylt-Logo.png'
          alt='Bylt-Logo'
          width={130}
          height={36.53}
          priority
        />
      </DynamicMyLink>
    </div>
  );
};

export default NavBarLogo;
