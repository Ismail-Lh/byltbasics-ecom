import classes from './CollectionsContainer.module.scss';
import { useFiltersContext } from '../../contexts/filters_context';
import { ProductsCard, SortProducts } from '../../components';

const CollectionsContainer = () => {
  const { filtered_products: products } = useFiltersContext();

  return (
    <div className='container'>
      <div className={classes.collections__grid}>
        <div className={classes.collections__filters}>
          <h1>Filters</h1>
        </div>
        <div className={classes.collections__products}>
          <div className={classes.sorts}>
            <SortProducts />
          </div>
          <div className={classes.products}>
            {products?.map(product => (
              <ProductsCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionsContainer;
