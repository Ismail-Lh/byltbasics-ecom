import { useProductsContext } from '../../contexts/products_context';
import classes from './PopularProductsSection.module.scss';

const PopularProductsSection = () => {
  const { men_products: products } = useProductsContext();

  console.log(products);

  return <div>Popular products section</div>;
};

export default PopularProductsSection;
