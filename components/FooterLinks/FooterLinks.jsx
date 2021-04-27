import { MyLink } from '..';
import classes from './FooterLinks.module.scss';

const FooterLinks = ({ links }) => {
  return (
    <ul className={classes.footer__list}>
      {links.map((link, idx) => (
        <li key={idx}>
          <MyLink route='#'>{link}</MyLink>
        </li>
      ))}
    </ul>
  );
};

export default FooterLinks;
