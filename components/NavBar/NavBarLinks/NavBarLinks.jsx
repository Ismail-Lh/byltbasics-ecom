import Link from 'next/link';
import { useState } from 'react';
import classes from './NavBarLinks.module.scss';

import { useProductsContext } from '../../../contexts/products_context';
import { useFiltersContext } from '../../../contexts/filters_context';
import {
  menCategories,
  menCollections,
  NavbarLinks,
  womenCategories,
  womenCollections,
} from '../../../utils/constants';
import { MenuIcon } from '../../../Icons';
import { DropDownMenu } from '../../';

const NavBarLinks = () => {
  const { openSidebar } = useProductsContext();
  const { updateCollection } = useFiltersContext();

  const [showMenDropMenu, setShowMenDropMenu] = useState(false);
  const [showWomenDropMenu, setShowWomenDropMenu] = useState(false);

  const handelHover = (link, state) => {
    link === 'men' && setShowMenDropMenu(state);
    link === 'women' && setShowWomenDropMenu(state);
  };

  const handelClick = link => {
    link === 'men' && updateCollection('shop-men', 'all men');
    link === 'women' && updateCollection('shop-women', 'all women');
    link === 'bundles' && updateCollection('bundles', 'bundles');
    link === 'last call' && updateCollection('sales', 'last call');
  };

  return (
    <>
      <ul className={classes.navbar__list}>
        {NavbarLinks.map(({ id, link, route }) => (
          <li
            className={classes.navbar__links}
            key={id}
            onClick={() => handelClick(link)}
            onMouseEnter={() => handelHover(link, true)}
            onMouseLeave={() => handelHover(link, false)}>
            <Link href={`/collections/${route}`}>{link}</Link>

            {link === 'men' && (
              <DropDownMenu
                collections={menCollections}
                productsCategories={menCategories}
                gender='men'
                imageInfo={{
                  imgUrl: 'men-drop-down-img.jpg',
                  route: '/collections/spring-collection',
                  subtitle: 'shop the latest styles',
                  title: 'gear up for summer',
                }}
                showDropMenu={showMenDropMenu}
              />
            )}

            {link === 'women' && (
              <DropDownMenu
                collections={womenCollections}
                productsCategories={womenCategories}
                gender='women'
                imageInfo={{
                  imgUrl: 'women-drop-down-img.jpg',
                  route: '/products/womens-elite-joggers',
                  subtitle: 'ultimate comfort. premium style.',
                  title: "women's elite + joggers",
                }}
                showDropMenu={showWomenDropMenu}
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
