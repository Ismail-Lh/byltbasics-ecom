import { footerLinks } from "@/constants/footer-links";
import { chunkArray } from "@/utils";
import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

import { FooterLinkList } from "./footer-link-list";
import styles from "./styles.module.scss";

/**
 * Renders the container component for the footer links.
 *
 * @returns The JSX element representing the footer links container.
 */
export function Footer() {
  // Chunk the footer links into groups of 4
  const linkChunks = chunkArray(footerLinks, 4);

  return (
    <div className="container">
      <div className={styles.footer__links}>
        <div className={styles.footer__links_1}>
          <Image src="/assets/Bylt-Logo.png" alt="Bylt-Logo" width={180} height={50.59} />

          <div>
            <Link href="https://www.facebook.com/BYLTbasics/">
              <Facebook />
            </Link>
            <Link href="https://www.instagram.com/byltbasics/">
              <Instagram />
            </Link>
          </div>
        </div>

        {linkChunks.map(chunk => (
          <FooterLinkList key={uuidv4()} links={chunk} />
        ))}
      </div>

      <div className={styles.footer__copyright}>
        <p className={styles.footer__copyright_1}>COPYRIGHT © 2025, BYLT BASICS. ALL RIGHTS RESERVED.</p>
        <p className={styles.footer__copyright_2}>
          DEVELOPED BY
          {" "}
          <Link href="https://twitter.com/lhbibe_ismail">ISMAIL LAHBIYEB</Link>
        </p>
      </div>
    </div>
  );
}
