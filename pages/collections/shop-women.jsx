import { ShopPageContainer } from '../../containers';
import { useProductsContext } from '../../contexts/products_context';

const ShopWomenPage = () => {
  const { women_products: products } = useProductsContext();

  return (
    <ShopPageContainer
      imgSrc='shop-women.png'
      title='all women'
      products={products}
    />
  );
};

export default ShopWomenPage;
