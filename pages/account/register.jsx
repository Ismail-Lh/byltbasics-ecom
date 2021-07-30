import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Layout } from '../../components';
import { pageAnimation } from '../../utils/animations';

const RegisterPageContainer = dynamic(() =>
  import('../../containers/RegisterPageContainer/RegisterPageContainer')
);

const RegisterPage = () => {
  return (
    <Layout title='Create Account | BYLT Basics'>
      <motion.div
        variants={pageAnimation}
        initial='initial'
        animate='animate'
        exit='exit'>
        <RegisterPageContainer />
      </motion.div>
    </Layout>
  );
};

export default RegisterPage;
