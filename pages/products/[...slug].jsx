import { useProductsContext } from '../../contexts/products_context';
import { SingleProductContainer } from '../../containers';
import { ProductsSliderSection } from '../../sections';
import { Layout } from '../../components';

const SingleProductPage = () => {
  const { similar_products: products, single_product } = useProductsContext();

  const { name } = single_product.productInfo;

  return (
    <Layout title={`${name.toUpperCase()} | BYLT Premium`}>
      <SingleProductContainer />
      <ProductsSliderSection title='you my also like' products={products} />
    </Layout>
  );
};

export default SingleProductPage;
