import classes from './ProductsCategorySection.module.scss';
import { ProductsCategoryData } from '../../utils/constants';
import { ProductsCategoryCard } from '../../components';

const ProductsCategorySection = () => {
  return (
    <div className='container'>
      <div className={classes.products__category}>
        {ProductsCategoryData.map(({ id, category, imgUrl, route }) => (
          <ProductsCategoryCard
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
