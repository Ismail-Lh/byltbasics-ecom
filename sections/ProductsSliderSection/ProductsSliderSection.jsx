import { useState } from 'react';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import classes from './ProductsSliderSection.module.scss';

import { Loader, ProductsCard } from '../../components';
import { ArrowLeftIcon, ArrowRightIcon } from '../../Icons';
import { useProductsContext } from '../../contexts/products_context';

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
    <div className={classes.productsSlider}>
      <div className='container'>
        {loading ? (
          <Loader message='products loading...' />
        ) : (
          <>
            <h2 className={classes.productsSlider__title}>{title}</h2>

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
          </>
        )}
      </div>
    </div>
  );
};

export default ProductsSliderSection;
