import { motion } from 'framer-motion';
import { Layout } from '../components';
import { PageNotFoundContainer } from '../containers';
import { pageAnimation } from '../utils/animations';

const PageNotFound = () => {
  return (
    <Layout title='404 Not Found | BYLT Basics'>
      <motion.div
        variants={pageAnimation}
        initial='initial'
        animate='animate'
        exit='exit'>
        <PageNotFoundContainer />
      </motion.div>
    </Layout>
  );
};

export default PageNotFound;
