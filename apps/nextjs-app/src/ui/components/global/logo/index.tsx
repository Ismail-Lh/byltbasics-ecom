import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";

/**
 * Renders the logo for the navigation bar.
 *
 * @returns The JSX element representing the logo.
 */
export function Logo() {
  return (
    <div className={styles.navbar__logo}>
      <Link href="/">
        <Image
          src="/assets/Bylt-Logo.png"
          alt="Bylt-Logo"
          width={130}
          height={36.53}
        />
      </Link>
    </div>
  );
}
