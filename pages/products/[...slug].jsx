import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

import { Layout } from '../../components';
import { useProductsContext } from '../../contexts/products_context';
import { pageAnimation } from '../../utils/animations';

const SingleProductContainer = dynamic(() =>
  import('../../containers/SingleProductContainer/SingleProductContainer')
);

const SingleProductPage = () => {
  const { single_product } = useProductsContext();
  const { name } = single_product?.productInfo;

  return (
    <Layout title={`${name.toUpperCase()} | BYLT Premium`}>
      <motion.div
        variants={pageAnimation}
        initial='initial'
        animate='animate'
        exit='exit'>
        <SingleProductContainer />
      </motion.div>
    </Layout>
  );
};

export default SingleProductPage;
