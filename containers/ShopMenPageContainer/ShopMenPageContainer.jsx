import classes from './ShopMenPageContainer.module.scss';

import { BackgroundImage } from '../../components';
import { useProductsContext } from '../../contexts/products_context';
import { CollectionsContainer } from '../';

const ShopMenPageContainer = () => {
  const { men_products: products } = useProductsContext();
  return (
    <div>
      <div className={classes.backgroundImage}>
        <BackgroundImage imgSrc='shop-men.png' title='all men' />
      </div>

      <CollectionsContainer products={products} />
    </div>
  );
};

export default ShopMenPageContainer;
