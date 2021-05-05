import { useEffect } from 'react';
import { useProductsContext } from '../../contexts/products_context';
import classes from './PopularProductsSection.module.scss';

const PopularProductsSection = ({ products }) => {
  const { getPopularProducts } = useProductsContext();

  useEffect(() => {
    getPopularProducts(products);
    console.log(products);
  }, [products]);

  return <div>Popular products section</div>;
};

export default PopularProductsSection;
