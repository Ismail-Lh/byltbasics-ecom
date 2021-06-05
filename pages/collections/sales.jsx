import { ShopPageContainer } from '../../containers';
import { useFiltersContext } from '../../contexts/filters_context';

const SalesPage = () => {
  const { sales_products: products } = useFiltersContext();

  return (
    <ShopPageContainer
      imgSrc='shop-sales.jpg'
      title='last call'
      products={products}
    />
  );
};

export default SalesPage;
