import Image from "next/image";

import MyLink from "../../MyLink/MyLink";
import classes from "./NavBarLogo.module.scss";

/**
 * Renders the logo for the navigation bar.
 *
 * @returns The JSX element representing the logo.
 */
function NavBarLogo() {
  return (
    <div className={classes.navbar__logo}>
      <MyLink route="/">
        <Image
          src="/assets/Bylt-Logo.png"
          alt="Bylt-Logo"
          width={130}
          height={36.53}
        />
      </MyLink>
    </div>
  );
}

export default NavBarLogo;
