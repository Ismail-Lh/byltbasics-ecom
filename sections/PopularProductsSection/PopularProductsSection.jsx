import { useState } from 'react';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import classes from './PopularProductsSection.module.scss';

import { ProductsCard } from '../../components';
import { ArrowLeftIcon, ArrowRightIcon } from '../../Icons';
import { useProductsContext } from '../../contexts/products_context';

const PopularProductsSection = ({ gender }) => {
  const { popular_products } = useProductsContext();

  const popularProducts = popular_products?.map(products => products[gender]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    spacing: 15,
    slidesPerView: 4,
    centered: true,
    loop: true,
    mode: 'snap',
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
    breakpoints: {
      '(min-width: 768px)': {
        slidesPerView: 2,
        mode: 'free-snap',
      },
      '(min-width: 1200px)': {
        slidesPerView: 4,
        mode: 'free-snap',
      },
    },
  });

  return (
    <div className={classes.popularProducts__wrapper}>
      <div className='container'>
        <h2 className={classes.popularProducts__title}>
          {gender}'s popular products
        </h2>
        <div ref={sliderRef} className='keen-slider'>
          {popularProducts.map(products =>
            products.map(product => (
              <div className='keen-slider__slide' key={product.id}>
                <ProductsCard key={product.id} {...product} gender={gender} />
              </div>
            ))
          )}
        </div>
      </div>

      {slider && (
        <div className='arrows'>
          <ArrowLeftIcon
            onClick={e => e.stopPropagation() || slider.prev()}
            disabled={currentSlide === 0}
          />
          <ArrowRightIcon
            onClick={e => e.stopPropagation() || slider.next()}
            disabled={currentSlide === slider.details().size - 1}
          />
        </div>
      )}
    </div>
  );
};

export default PopularProductsSection;
