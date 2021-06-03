import { ShopPageContainer } from '../../containers';
import { useProductsContext } from '../../contexts/products_context';

const ShopMenPage = () => {
  // const { men_products: products } = useProductsContext();

  return <ShopPageContainer imgSrc='shop-men.png' title='all men' />;
};

export default ShopMenPage;
