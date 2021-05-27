import Link from 'next/link';
import classes from './NavBarLinks.module.scss';

import {
  menCollections,
  NavbarLinks,
  womenCollections,
} from '../../../utils/constants';
import { useState } from 'react';
import { useProductsContext } from '../../../contexts/products_context';
import { MenuIcon } from '../../../Icons';
import { DropDownMenu } from '../../';

const NavBarLinks = () => {
  const { openSidebar } = useProductsContext();
  const [showDropMenu, setShowDropMenu] = useState(false);

  return (
    <>
      <ul className={classes.navbar__list}>
        {NavbarLinks.map(({ id, link, route }) => (
          <li
            className={classes.navbar__links}
            key={id}
            onMouseEnter={() =>
              (link === 'men' || link === 'women') && setShowDropMenu(true)
            }
            onMouseLeave={() =>
              (link === 'men' || link === 'women') && setShowDropMenu(false)
            }>
            <Link href={`/collections/${route}`}>{link}</Link>

            {link === 'men' && (
              <DropDownMenu
                collections={menCollections}
                gender='men'
                showDropMenu={showDropMenu}
              />
            )}

            {link === 'women' && (
              <DropDownMenu
                collections={womenCollections}
                gender='women'
                showDropMenu={showDropMenu}
              />
            )}
          </li>
        ))}
      </ul>
      <div className={classes.menu__icon}>
        <button type='button' onClick={openSidebar}>
          <MenuIcon />
        </button>
      </div>
    </>
  );
};

export default NavBarLinks;
