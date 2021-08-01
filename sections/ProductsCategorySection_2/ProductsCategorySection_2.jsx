import { motion } from 'framer-motion';

import classes from './ProductsCategorySection_2.module.scss';
import { ProductsCategoryCard2 } from '../../components';
import useScroll from '../../hooks/useScroll';
import { rightToLeft } from '../../utils/animations';
import { ProductsCategoryData_2 } from '../../utils/constants';

const ProductsCategorySection_2 = () => {
  const [element, controls] = useScroll();

  return (
    <div className='container' ref={element}>
      <motion.div
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
      </motion.div>
    </div>
  );
};

export default ProductsCategorySection_2;
