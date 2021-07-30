import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

import { Layout } from '../../components';
import { pageAnimation } from '../../utils/animations';
const LoginPageContainer = dynamic(() =>
  import('../../containers/LoginPageContainer/LoginPageContainer')
);

const LoginPage = () => {
  return (
    <Layout title='Login | BYLT Premium'>
      <motion.div
        variants={pageAnimation}
        initial='initial'
        animate='animate'
        exit='exit'>
        <LoginPageContainer />
      </motion.div>
    </Layout>
  );
};

export default LoginPage;
