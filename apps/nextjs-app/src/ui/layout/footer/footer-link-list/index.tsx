import Link from "next/link";

import styles from "./styles.module.scss";

interface IProps {
  links: {
    link: string;
    route: string;
    id: string;
  }[];
}

export function FooterLinkList({ links }: IProps) {
  return (
    <ul className={styles.footer__list}>
      {links.map(({ link, route, id }) => (
        <li key={id}>
          <Link href={route}>{link}</Link>
        </li>
      ))}
    </ul>
  );
}
