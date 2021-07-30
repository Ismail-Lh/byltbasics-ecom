import { motion } from 'framer-motion';
import { useProductsContext } from '../contexts/products_context';

// COMPONENTS
import { HeroImage, Layout } from '../components';

// SECTIONS
import {
  HeroSection,
  ImagesGridSection,
  ProductsSliderSection,
  ProductsCategorySection,
  SplitContentSection,
} from '../sections';

// CONTAINERS
import {
  SplitContentImageContainer,
  SplitContentTextContainer,
} from '../containers';

// UTILS
import { pageAnimation } from '../utils/animations';

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
      <motion.div
        variants={pageAnimation}
        initial='initial'
        animate='animate'
        exit='exit'>
        <HeroSection />

        <ProductsCategorySection />

        <HeroImage
          title="women's essential collection"
          subtitle='Empowered Style. Essential Comfort.'
          position='center'
          color='#fff'
          route='/collections/womens-essential-collection'
          imgUrlDesktop='hero__desktop-womens-essential-collection.jpg'
          imgUrlMobile='hero__mobile-womens-essential-collection.jpg'
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
          imgUrlDesktop='hero__desktop-performance-collection.jpg'
          imgUrlMobile='hero__mobile-performance-collection.jpg'
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

        <HeroImage
          title='executive collection'
          subtitle='Made for the Modern Man.'
          position='center'
          color='#fff'
          route='/collections/executive-collection'
          imgUrlDesktop='hero__desktop-executive-collection.jpg'
        />

        <SplitContentSection isTextFirst={false} order='-1'>
          <SplitContentImageContainer imgUrl='/assets/split-content-img-2.jpg' />
          <SplitContentTextContainer
            title='give $10, get $10'
            text='Give your friends $10 off their first purchase and get $10 in points when they spend $50 or more.'
            isTextFirst={false}
            route='/pages/rewards'
          />
        </SplitContentSection>
      </motion.div>
    </Layout>
  );
}
