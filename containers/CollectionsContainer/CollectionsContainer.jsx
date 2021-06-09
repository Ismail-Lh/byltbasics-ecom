import { useMediaQuery } from '@react-hook/media-query';

import classes from './CollectionsContainer.module.scss';

import { ProductsCard, SortProducts, Filters } from '../../components';
import { useFiltersContext } from '../../contexts/filters_context';

const CollectionsContainer = () => {
  const { filtered_products: products } = useFiltersContext();

  const matchesMedia = useMediaQuery('only screen and (max-width: 768px)');

  const ProductsContainer = () => (
    <div className={classes.products}>
      {products?.map(product => (
        <ProductsCard product={product} key={product.id} />
      ))}
    </div>
  );

  const FiltersContainer = () => (
    <div>
      <Filters />
    </div>
  );

  const SortsContainer = () => (
    <div className={classes.sorts}>
      <SortProducts />
    </div>
  );

  return (
    <div className='container'>
      <div className={classes.collections__grid}>
        {!matchesMedia ? (
          <>
            <FiltersContainer />

            <div className={classes.collections__products}>
              <SortsContainer />
              <ProductsContainer />
            </div>
          </>
        ) : (
          <>
            <div className={classes.collections__filters}>
              <FiltersContainer />
              <SortsContainer />
            </div>

            <ProductsContainer />
          </>
        )}
      </div>
    </div>
  );
};

export default CollectionsContainer;
