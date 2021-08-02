import dynamic from 'next/dynamic';
import { useState } from 'react';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import classes from './ProductsSliderSection.module.scss';
import { useProductsContext } from '../../contexts/products_context';

import { ArrowLeftIcon, ArrowRightIcon } from '../../Icons';
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

  return (
    <div className={classes.products}>
      <div className='container'>
        {loading ? (
          <Loader message='products loading...' />
        ) : (
          <>
            {products?.length <= 4 ? (
              <div className={classes.products__grid}>
                <h2  className={classes.title}>
                  {title}
                </h2>

                <div className={classes.products}>
                  {products?.map(product => (
                    <ProductsCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            ) : (
              <div className={classes.products__slider}>
                <h2  className={classes.title}>
                  {title}
                </h2>

                <div ref={sliderRef} className='keen-slider'>
                  {products?.map(product => (
                    <div className='keen-slider__slide' key={product.id}>
                      <ProductsCard key={product.id} product={product} />
                    </div>
                  ))}
                </div>

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
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductsSliderSection;
