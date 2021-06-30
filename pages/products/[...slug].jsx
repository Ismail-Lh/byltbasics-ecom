import { useProductsContext } from '../../contexts/products_context';
import { SingleProductContainer } from '../../containers';
import { ProductsSliderSection } from '../../sections';

const SingleProductPage = () => {
  const { similar_products: products } = useProductsContext();

  return (
    <>
      <SingleProductContainer />
      <ProductsSliderSection title='you my also like' products={products} />
    </>
  );
};

export default SingleProductPage;
