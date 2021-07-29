import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

import { Layout } from '../../components';
import { useProductsContext } from '../../contexts/products_context';

const SingleProductContainer = dynamic(() =>
  import('../../containers/SingleProductContainer/SingleProductContainer')
);

const SingleProductPage = () => {
  const { single_product } = useProductsContext();
  const { name } = single_product?.productInfo;

  return (
    <Layout title={`${name.toUpperCase()} | BYLT Premium`}>
      <motion.div exit={{ opacity: 0 }}>
        <SingleProductContainer />
      </motion.div>
    </Layout>
  );
};

export default SingleProductPage;
