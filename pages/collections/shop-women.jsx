import { useEffect } from 'react';
import { useFiltersContext } from '../../contexts/filters_context';
import { useProductsContext } from '../../contexts/products_context';

const ShopWomenPage = () => {
  const { women_products: products } = useProductsContext();
  const { getProductsByGender } = useFiltersContext();

  useEffect(() => {
    getProductsByGender(products);
  }, []);

  return <div>Shop Women</div>;
};

export default ShopWomenPage;
