import Link from 'next/link';
import classes from './NavBar.module.scss';

const NavBarList = () => {
  return (
    <ul className={classes.navbar__list}>
      <li className={classes.navbar__items}>
        <Link href='/'>men</Link>
      </li>
      <li className={classes.navbar__items}>
        <Link href='/'>women</Link>
      </li>
      <li className={classes.navbar__items}>
        <Link href='/'>bundles</Link>
      </li>
      <li className={classes.navbar__items}>
        <Link href='/'>last call</Link>
      </li>
    </ul>
  );
};

export default NavBarList;
