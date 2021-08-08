import dynamic from 'next/dynamic';

// COMPONENTS
import { Layout } from '../components';

import { useProductsContext } from '../contexts/products_context';
import {
  ProductsCategoryData_1,
  ProductsCategoryData_2,
} from '../utils/constants';

import { HeroSection } from '../sections';

const HeroImage = dynamic(() =>
  import('../components/Hero/HeroImage/HeroImage')
);

const ProductsSliderSection = dynamic(() =>
  import('../sections/ProductsSliderSection/ProductsSliderSection')
);
const ProductsCategorySection = dynamic(() =>
  import('../sections/ProductsCategorySection/ProductsCategorySection')
);

const SplitContentSection = dynamic(() =>
  import('../sections/SplitContentSection/SplitContentSection')
);

const SplitContentImageContainer = dynamic(() =>
  import('../containers/SplitContentImageContainer/SplitContentImageContainer')
);
const SplitContentTextContainer = dynamic(() =>
  import('../containers/SplitContentTextContainer/SplitContentTextContainer')
);

export default function Home() {
  const { popular_products } = useProductsContext();

  const getPopularProducts = gender => {
    const products = popular_products
      ?.map(products => products[gender])
      .map(products => products);

    return products[0];
  };

  return (
    <Layout>
      <>
        <HeroSection />

        <ProductsCategorySection categories={ProductsCategoryData_1} />

        <HeroImage
          title="women's essential collection"
          subtitle='Empowered Style. Essential Comfort.'
          position='center'
          color='#fff'
          route='/collections/womens-essential-collection'
          imgUrlDesktop='/assets/hero__desktop-womens-essential-collection.jpg'
          imgUrlMobile='/assets/hero__mobile-womens-essential-collection.jpg'
        />

        <ProductsSliderSection
          title="men's popular products"
          products={getPopularProducts('men')}
        />

        <HeroImage
          title='performance collection'
          subtitle='Pushing The Limits'
          position='center'
          color='#fff'
          route='/collections/performance-collection'
          imgUrlDesktop='/assets/hero__desktop-performance-collection.jpg'
          imgUrlMobile='/assets/hero__mobile-performance-collection.jpg'
        />

        <ProductsCategorySection categories={ProductsCategoryData_2} />

        <SplitContentSection isTextFirst={true} order='2'>
          <SplitContentTextContainer
            title='basics to last a lifetime'
            text='Our pre-wash and wrinkle-free technology protect your new favorite shirt from everyday wear and tear.'
            isTextFirst={true}
            route='/pages/bylt-apparel-sizing-guide'
          />

          <SplitContentImageContainer
            imgUrl='/assets/split-content-img-1.jpg'
            imgAlt='split-content-img-1'
          />
        </SplitContentSection>

        <HeroImage
          title='executive collection'
          subtitle='Made for the Modern Man.'
          position='center'
          color='#fff'
          route='/collections/executive-collection'
          imgUrlDesktop='/assets/hero__desktop-executive-collection.jpg'
          imgUrlMobile='/assets/hero__mobile-executive-collection.jpg'
        />

        <ProductsSliderSection
          title="women's popular products"
          products={getPopularProducts('women')}
        />

        <SplitContentSection isTextFirst={false} order='-1'>
          <SplitContentImageContainer
            imgUrl='/assets/split-content-img-2.jpg'
            imgAlt='split-content-img-2'
          />
          <SplitContentTextContainer
            title='give $10, get $10'
            text='Give your friends $10 off their first purchase and get $10 in points when they spend $50 or more.'
            isTextFirst={false}
            route='/pages/rewards'
          />
        </SplitContentSection>
      </>
    </Layout>
  );
}
