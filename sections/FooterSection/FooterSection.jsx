import classes from './FooterSection.module.scss';

import { FooterFormContainer, FooterLinksContainer } from '../../containers';

const FooterSection = () => {
  return (
    <div className='container'>
      <FooterFormContainer />
      <FooterLinksContainer />
    </div>
  );
};

export default FooterSection;
