import Link from 'next/link';
import classes from './NavBarLinks.module.scss';

import { NavbarLinks } from '../../../utils/constants';

const NavBarLinks = () => {
  return (
    <ul className={classes.navbar__list}>
      {NavbarLinks.map(({ id, link, route }) => (
        <li className={classes.navbar__links} key={id}>
          <Link href={`/collections/${route}`}>{link}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavBarLinks;
