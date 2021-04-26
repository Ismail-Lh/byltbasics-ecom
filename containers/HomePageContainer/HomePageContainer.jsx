import { HeroImage } from '../../components';
import {
  HeroSection,
  ImagesGridSection,
  ProductsCategorySection,
  SplitContentSection,
} from '../../sections';

import { SplitContentImageContainer, SplitContentTextContainer } from '../';

const HomePageContainer = () => {
  return (
    <div>
      <HeroSection />

      <ProductsCategorySection />

      <HeroImage
        title='executive collection'
        subtitle='made for the modern man.'
        position='right'
        color='#fff'
        route='/collections/executive-collection'
        imgUrlDesktop='hero-5.jpg'
        imgUrlMobile='hero-5-mobile.jpg'
      />

      <HeroImage
        title='snow wash collection'
        subtitle='vintage grade. custom made.'
        position='center'
        color='#fff'
        route='/collections/snow-wash'
        imgUrlDesktop='hero-6.jpg'
        imgUrlMobile='hero-6-mobile.jpg'
      />

      <SplitContentSection isTextFirst={true} order='2'>
        <SplitContentTextContainer
          title='basics to last a lifetime'
          text='Our pre-wash and wrinkle-free technology protect your new favorite shirt from everyday wear and tear.'
          isTextFirst={true}
          route='/pages/bylt-apparel-sizing-guide'
        />
        <SplitContentImageContainer imgUrl='/assets/split-content-img-1.jpg' />
      </SplitContentSection>

      <ImagesGridSection />

      <SplitContentSection isTextFirst={false} order='-1'>
        <SplitContentImageContainer imgUrl='/assets/split-content-img-2.jpg' />
        <SplitContentTextContainer
          title='give $10, get $10'
          text='Give your friends $10 off their first purchase and get $10 in points when they spend $50 or more.'
          isTextFirst={false}
          route='/pages/rewards'
        />
      </SplitContentSection>
    </div>
  );
};

export default HomePageContainer;
