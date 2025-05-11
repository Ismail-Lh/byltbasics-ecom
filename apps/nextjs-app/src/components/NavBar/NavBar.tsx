import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

import classes from "./NavBar.module.scss";

import { useCartContext } from "../../contexts/cart_context";
import { useProductsContext } from "../../contexts/products_context";

import NavBarIcons from "./NavBarIcons/NavBarIcons";
import NavBarLinks from "./NavBarLinks/NavBarLinks";
import NavBarLogo from "./NavBarLogo/NavBarLogo";

const DynamicMobileMenu = dynamic(() => import("../MobileMenu/MobileMenu"));
const DynamicCart = dynamic(() => import("../Cart/Cart"));

/**
 * Renders the navigation bar component.
 *
 * @returns The rendered navigation bar component.
 */
function NavBar() {
  const { isCartOpen } = useCartContext();
  const { isSidebarOpen } = useProductsContext();

  return (
    <nav className={classes.navbar}>
      <div className="container">
        <div className={classes.navbar__items}>
          <NavBarLinks />

          <NavBarLogo />

          <NavBarIcons />
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isSidebarOpen && <DynamicMobileMenu />}
      </AnimatePresence>

      <AnimatePresence initial={false}>
        {isCartOpen && <DynamicCart />}
      </AnimatePresence>
    </nav>
  );
}

export default NavBar;
