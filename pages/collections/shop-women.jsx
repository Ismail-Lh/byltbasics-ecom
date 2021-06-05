import { ShopPageContainer } from '../../containers';
import { useFiltersContext } from '../../contexts/filters_context';

const ShopWomenPage = () => {
  const { filtered_products: products } = useFiltersContext();

  return (
    <ShopPageContainer
      imgSrc='shop-women.png'
      title='all women'
      products={products}
    />
  );
};

export default ShopWomenPage;
