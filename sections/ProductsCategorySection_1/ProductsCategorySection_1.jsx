import dynamic from 'next/dynamic';

import classes from './ProductsCategorySection_1.module.scss';
import { ProductsCategoryData_1 } from '../../utils/constants';

const ProductsCategoryCard1 = dynamic(() =>
  import('../../components/ProductsCategoryCard1/ProductsCategoryCard1')
);

const ProductsCategorySection = () => {
  return (
    <div className='container'>
      <div className={classes.products__category_1}>
        {ProductsCategoryData_1.map(({ id, category, imgUrl, route }) => (
          <ProductsCategoryCard1
            key={id}
            category={category}
            imgUrl={imgUrl}
            route={route}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsCategorySection;
