import classes from './FooterFormContainer.module.scss';

import { FooterFormText, FooterFormInput } from '../../components';

const FooterFormContainer = () => {
  return (
    <div className={classes.footer__form}>
      <FooterFormText />
      <FooterFormInput />
    </div>
  );
};

export default FooterFormContainer;
