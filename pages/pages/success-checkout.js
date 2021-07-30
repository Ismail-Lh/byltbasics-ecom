import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Layout } from '../../components';
import { pageAnimation } from '../../utils/animations';

const SuccessCheckoutPageContainer = dynamic(() =>
  import(
    '../../containers/SuccessCheckoutPageContainer/SuccessCheckoutPageContainer'
  )
);

const SuccessCheckoutPage = () => {
  return (
    <Layout title='Checkout Success | BYLT Premium'>
      <motion.div
        variants={pageAnimation}
        initial='initial'
        animate='animate'
        exit='exit'>
        <SuccessCheckoutPageContainer />
      </motion.div>
    </Layout>
  );
};

export default SuccessCheckoutPage;
