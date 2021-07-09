import { Layout } from '../../components';
import { useProductsContext } from '../../contexts/products_context';
import { SingleProductContainer } from '../../containers';

const SingleProductPage = () => {
  const { single_product } = useProductsContext();
  const { name } = single_product?.productInfo;

  return (
    <Layout title={`${name.toUpperCase()} | BYLT Premium`}>
      <SingleProductContainer />
    </Layout>
  );
};

export default SingleProductPage;
