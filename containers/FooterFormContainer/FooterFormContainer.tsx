import dynamic from "next/dynamic";

import classes from "./FooterFormContainer.module.scss";

const FooterFormText = dynamic(
  () => import("../../components/FooterFormText/FooterFormText"),
);
const FooterFormInput = dynamic(
  () => import("../../components/FooterFormInput/FooterFormInput"),
);

/**
 * Renders the container for the footer form.
 *
 * @returns The JSX element representing the footer form container.
 */

function FooterFormContainer() {
  return (
    <div className={classes.footer__form}>
      <FooterFormText />
      <FooterFormInput />
    </div>
  );
}

export default FooterFormContainer;
