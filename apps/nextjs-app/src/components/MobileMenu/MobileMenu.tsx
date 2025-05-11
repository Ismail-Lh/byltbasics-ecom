import { motion } from "framer-motion";
import Link from "next/link";

import CloseIcon from "../../Icons/CloseIcon";
import SearchIcon from "../../Icons/SearchIcon";
import { useFiltersContext } from "../../contexts/filters_context";
import { useProductsContext } from "../../contexts/products_context";
import { sideBarVariants } from "../../utils/animations";
import { NavbarLinks } from "../../utils/constants";
import classes from "./MobileMenu.module.scss";

/**
 * Renders the mobile menu component.
 *
 * @returns The mobile menu component.
 */
function MobileMenu() {
  const { closeSidebar } = useProductsContext();
  const { updateCollection } = useFiltersContext();

  return (
    <motion.div
      variants={sideBarVariants}
      initial="initial"
      animate="animate"
      exit="initial"
      className={classes.mobileMenu}
    >
      <div className={classes.mobileMenu__icons}>
        <button type="button" onClick={closeSidebar}>
          <CloseIcon />
        </button>
      </div>

      <form className={classes.mobileMenu__form}>
        <input type="text" placeholder="search" />
        <SearchIcon />
      </form>

      <ul className={classes.mobileMenu__list}>
        {NavbarLinks.map(({ id, link, route }) => (
          <li
            key={id}
            onClick={() => {
              updateCollection(link);
              closeSidebar();
            }}
          >
            <Link href={`/collections/${route}`}>{link}</Link>
          </li>
        ))}
        <li onClick={closeSidebar}>
          <Link href="/account/login">login</Link>
        </li>
      </ul>
    </motion.div>
  );
}

export default MobileMenu;
