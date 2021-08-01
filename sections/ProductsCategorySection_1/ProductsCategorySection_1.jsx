import dynamic from 'next/dynamic';

import classes from './ProductsCategorySection_1.module.scss';
import { ProductsCategoryData_1 } from '../../utils/constants';
import { motion } from 'framer-motion';
import { leftToRight } from '../../utils/animations';
import useScroll from '../../hooks/useScroll';

const ProductsCategoryCard1 = dynamic(() =>
  import('../../components/ProductsCategoryCard1/ProductsCategoryCard1')
);

const ProductsCategorySection = () => {
  const [element, controls] = useScroll();
  return (
    <div className='container' ref={element}>
      <motion.div
        variants={leftToRight}
        animate={controls}
        className={classes.products__category_1}>
        {ProductsCategoryData_1.map(({ id, category, imgUrl, route }) => (
          <ProductsCategoryCard1
            key={id}
            category={category}
            imgUrl={imgUrl}
            route={route}
          />
        ))}
      </motion.div>

      {/* <motion.div
        variants={rightToLeft}
        animate={controls}
        className={classes.products__category_2}>
        {ProductsCategoryData_2.map(({ id, category, imgUrl, route }) => (
          <ProductsCategoryCard2
            key={id}
            category={category}
            imgUrl={imgUrl}
            route={route}
          />
        ))}
      </motion.div> */}
    </div>
  );
};

export default ProductsCategorySection;
