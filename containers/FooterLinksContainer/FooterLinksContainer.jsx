import classes from './FooterLinksContainer.module.scss';

import { FooterLinks, MyLink } from '../../components';
import { FacebookIcon, InstagramIcon } from '../../Icons';

const FooterLinksContainer = () => {
  return (
    <div className='container'>
      <div className={classes.footer__links}>
        <div className={classes.footer__links_1}>
          <img src='assets/Bylt-Logo.png' alt='Bylt-Logo' />

          <MyLink route='https://www.facebook.com/BYLTbasics/'>
            <FacebookIcon />
          </MyLink>
          <MyLink route='https://www.instagram.com/byltbasics/'>
            <InstagramIcon />
          </MyLink>
        </div>

        <FooterLinks
          links={['our story', 'our fabrics', 'gift cards', 'bylt fresh']}
        />
        <FooterLinks
          links={[
            'frequently asked questions',
            'returns & exchanges',
            'contact us',
            'bylt rewards',
          ]}
        />
        <FooterLinks
          links={[
            'shipping policy',
            'returns policy',
            'terms of use',
            'privacy policy',
          ]}
        />
        <FooterLinks
          links={[
            'cookie policy',
            'accessibility statement',
            'california privacy statement',
          ]}
        />
      </div>
    </div>
  );
};

export default FooterLinksContainer;
