import MyLink from "../MyLink/MyLink";
import classes from "./FooterLinks.module.scss";

type FooterLinksProps = {
  links: {
    link: string;
    route: string;
    id: number;
  }[];
};

function FooterLinks({ links }: FooterLinksProps) {
  return (
    <ul className={classes.footer__list}>
      {links.map(({ link, route, id }) => (
        <li key={id}>
          <MyLink route={route}>{link}</MyLink>
        </li>
      ))}
    </ul>
  );
}

export default FooterLinks;
