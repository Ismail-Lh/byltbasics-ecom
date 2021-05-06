import { useProductsContext } from '../../contexts/products_context';
import classes from './PopularProductsSection.module.scss';

const PopularProductsSection = ({ gender }) => {
  const { popular_products } = useProductsContext();

  const popularProducts = popular_products?.map(products => products[gender]);

  return (
    <div className={classes.popularProducts__wrapper}>
      <div className='container'>
        <h2 className={classes.popularProducts__title}>
          {gender} popular products
        </h2>
        <div>
          {popularProducts.map(products =>
            products.map(({ name, id }) => (
              <div key={id}>
                <h3>{name}</h3>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PopularProductsSection;
