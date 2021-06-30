import { useProductsContext } from '../../contexts/products_context';

import { HeroImage } from '../../components';
import {
  HeroSection,
  ImagesGridSection,
  ProductsSliderSection,
  ProductsCategorySection,
  SplitContentSection,
} from '../../sections';

import { SplitContentImageContainer, SplitContentTextContainer } from '../';

const HomePageContainer = () => {
  const { popular_products } = useProductsContext();

  const getPopularProducts = gender => {
    const products = popular_products
      ?.map(products => products[gender])
      .map(products => products);

    return products[0];
  };

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

      <ProductsSliderSection
        title="men's popular products"
        products={getPopularProducts('men')}
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

      <ProductsSliderSection
        title="women's popular products"
        products={getPopularProducts('women')}
      />

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
