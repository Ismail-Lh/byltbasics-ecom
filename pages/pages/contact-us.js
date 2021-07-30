import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Layout } from '../../components';
import { pageAnimation } from '../../utils/animations';

const ContactUsPageContainer = dynamic(() =>
  import('../../containers/ContactUsPageContainer/ContactUsPageContainer')
);

const ContactUsPage = () => {
  return (
    <Layout title='Customer Support | BYLT Premium'>
      <motion.div
        variants={pageAnimation}
        initial='initial'
        animate='animate'
        exit='exit'>
        <ContactUsPageContainer />
      </motion.div>
    </Layout>
  );
};

export default ContactUsPage;
