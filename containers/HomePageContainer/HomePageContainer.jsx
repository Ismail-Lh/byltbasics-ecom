import { HeroImage } from '../../components';
import { HeroSection, ProductsCategorySection } from '../../sections';

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
    </div>
  );
};

export default HomePageContainer;
