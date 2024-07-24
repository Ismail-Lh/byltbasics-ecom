import classes from './ProductsCategorySection.module.scss';

import { ProductsCategoryCard } from '../../components';

const ProductsCategorySection = ({ productsCategories }) => {
  return (
    <div className='container'>
      <div className={classes.products__category_1}>
        {productsCategories.map(({ id, category, imgUrl, route }) => (
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
