import { ProductsCard } from '../../components';
import { useProductsContext } from '../../contexts/products_context';
import classes from './PopularProductsSection.module.scss';

const PopularProductsSection = ({ gender }) => {
  const { popular_products } = useProductsContext();

  const popularProducts = popular_products?.map(products => products[gender]);

  return (
    <div className={classes.popularProducts__wrapper}>
      <div className='container'>
        <h2 className={classes.popularProducts__title}>
          {gender}'s popular products
        </h2>
        <div className={classes.popularProducts__cards}>
          {popularProducts.map(products =>
            products.map(product => (
              <ProductsCard key={product.id} {...product} gender={gender} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PopularProductsSection;
