import { ProductsCard } from '../../components';
import classes from './CollectionsContainer.module.scss';

const CollectionsContainer = ({ products }) => {
  return (
    <div className='container'>
      <div className={classes.collections__grid}>
        <div className={classes.collections__filters}>
          <h1>Filters</h1>
        </div>
        <div className={classes.collections__products}>
          <div className={classes.sorts}>
            <h1>sort by</h1>
          </div>
          <div className={classes.products}>
            {products.map(product => (
              <ProductsCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionsContainer;
