import Link from 'next/link';
import classes from './NavBarLinks.module.scss';

import { NavbarLinks } from '../../../utils/constants';
import { MenuIcon } from '../../../Icons';
import { MobileMenu } from '../..';

const NavBarLinks = ({ openMenu }) => {
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
        <MenuIcon openMenu={openMenu} />
      </div>
    </>
  );
};

export default NavBarLinks;
