import { Logo } from "@/components/global";

import { NavbarIcons, NavbarLinks } from "./components";
import styles from "./styles.module.scss";

/**
 * Renders the navigation bar component.
 *
 * @returns The rendered navigation bar component.
 */
export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.navbar__items}>
          <NavbarLinks />

          <Logo />

          <NavbarIcons />
        </div>
      </div>
    </nav>
  );
}
