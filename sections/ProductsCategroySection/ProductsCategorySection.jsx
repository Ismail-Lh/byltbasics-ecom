import classes from './ProductsCategorySection.module.scss';
import {
  ProductsCategoryData_1,
  ProductsCategoryData_2,
} from '../../utils/constants';
import { ProductsCategoryCard1, ProductsCategoryCard2 } from '../../components';

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

      <div className={classes.products__category_2}>
        {ProductsCategoryData_2.map(({ id, category, imgUrl, route }) => (
          <ProductsCategoryCard2
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
