import classes from './ProductsCategorySection_2.module.scss';
import { ProductsCategoryCard2 } from '../../components';
import { ProductsCategoryData_2 } from '../../utils/constants';

const ProductsCategorySection_2 = () => {
  return (
    <div className='container'>
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

export default ProductsCategorySection_2;
