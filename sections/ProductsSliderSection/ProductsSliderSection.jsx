import dynamic from 'next/dynamic';
import { useState } from 'react';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import classes from './ProductsSliderSection.module.scss';
import { useProductsContext } from '../../contexts/products_context';

import { ArrowLeftIcon, ArrowRightIcon } from '../../Icons';
import { fadeInUp, heroImageAnimation, stagger } from '../../utils/animations';
import { motion } from 'framer-motion';
import useScroll from '../../hooks/useScroll';
const Loader = dynamic(() => import('../../components/Loader/Loader'));
const ProductsCard = dynamic(() =>
  import('../../components/ProductsCard/ProductsCard')
);

const ProductsSliderSection = ({ products, title }) => {
  const { loading } = useProductsContext();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    spacing: 15,
    slidesPerView: 4,
    centered: false,
    loop: true,
    mode: 'snap',
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
    breakpoints: {
      '(max-width: 768px)': {
        slidesPerView: 2,
        mode: 'snap',
      },
      '(max-width: 425px)': {
        slidesPerView: 1,
        mode: 'snap',
      },
    },
  });

  const [element, controls] = useScroll();

  return (
    <motion.div className={classes.products} ref={element}>
      <motion.div
        className='container'
        variants={heroImageAnimation}
        animate={controls}>
        {loading ? (
          <Loader message='products loading...' />
        ) : (
          <>
            {products?.length <= 4 ? (
              <motion.div variants={stagger} className={classes.products__grid}>
                <motion.h2 variants={fadeInUp} className={classes.title}>
                  {title}
                </motion.h2>

                <motion.div variants={stagger} className={classes.products}>
                  {products?.map(product => (
                    <ProductsCard key={product.id} product={product} />
                  ))}
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                variants={stagger}
                className={classes.products__slider}>
                <motion.h2 variants={fadeInUp} className={classes.title}>
                  {title}
                </motion.h2>

                <motion.div
                  variants={stagger}
                  ref={sliderRef}
                  className='keen-slider'>
                  {products?.map(product => (
                    <div className='keen-slider__slide' key={product.id}>
                      <ProductsCard key={product.id} product={product} />
                    </div>
                  ))}
                </motion.div>

                {slider && (
                  <div className='arrows'>
                    <ArrowLeftIcon
                      onClick={e => e.stopPropagation() || slider.prev()}
                    />
                    <ArrowRightIcon
                      onClick={e => e.stopPropagation() || slider.next()}
                    />
                  </div>
                )}
              </motion.div>
            )}
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProductsSliderSection;
