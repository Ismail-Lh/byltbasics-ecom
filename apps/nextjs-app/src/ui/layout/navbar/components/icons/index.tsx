"use client";

import { CircleHelp, Search, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

import styles from "./styles.module.scss";

/**
 * Renders the icons for the navigation bar.
 * @returns JSX.Element
 */
export function NavbarIcons() {
  const Icons = [
    { id: uuidv4(), icon: <CircleHelp />, route: "/contact-us" },
    { id: uuidv4(), icon: <User />, route: "/login" },
  ];

  return (
    <div
      className={styles.navbar__icons}
      style={{
        justifyContent: `${false ? "flex-start" : "flex-end"}`,
      }}
    >
      <button type="button" className={styles.navbar__search}>
        <Search />
      </button>

      <div className={styles.navbar__contact}>
        {Icons.map(({ id, icon, route }) => (
          <Link
            href={route}
            key={id}
          >
            {icon}
          </Link>
        ))}
      </div>

      <button
        className={styles.navbar__cart}
        type="button"
      >
        <ShoppingBag />
      </button>
    </div>
  );
}
