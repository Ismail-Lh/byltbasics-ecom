import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Layout } from '../../components';
import { pageAnimation } from '../../utils/animations';

const AboutUsPageContainer = dynamic(() =>
  import('../../containers/AboutUsPageContainer/AboutUsPageContainer')
);

const AboutUsPage = () => {
  return (
    <Layout title='Our Story | BYLT Premium'>
      <motion.div
        variants={pageAnimation}
        initial='initial'
        animate='animate'
        exit='exit'>
        <AboutUsPageContainer />
      </motion.div>
    </Layout>
  );
};

export default AboutUsPage;
