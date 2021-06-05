import { ShopPageContainer } from '../../containers';
import { useFiltersContext } from '../../contexts/filters_context';

const ShopMenPage = () => {
  const { filtered_products: products } = useFiltersContext();

  return (
    <ShopPageContainer
      imgSrc='shop-men.png'
      title='all men'
      products={products}
    />
  );
};

export default ShopMenPage;
