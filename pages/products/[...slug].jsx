import dynamic from 'next/dynamic';

import { useProductsContext } from '../../contexts/products_context';

import { PageTransition } from '../../components';
const Layout = dynamic(() => import('../../components/Layout/Layout'));

const SingleProductContainer = dynamic(() =>
  import('../../containers/SingleProductContainer/SingleProductContainer')
);

const SingleProductPage = () => {
  const { single_product } = useProductsContext();
  const { name } = single_product?.productInfo;

  return (
    <Layout title={`${name.toUpperCase()} | BYLT Premium`}>
      <PageTransition>
        <SingleProductContainer />
      </PageTransition>
    </Layout>
  );
};

export default SingleProductPage;
