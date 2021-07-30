import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Layout } from '../../components';

import PrivateRoute from '../../HOC/PrivateRoute';
import { pageAnimation } from '../../utils/animations';

const AccountPageContainer = dynamic(() =>
  import('../../containers/AccountPageContainer/AccountPageContainer')
);

const AccountPage = () => {
  return (
    <Layout title='Account | BYLT Basics'>
      <motion.div
        variants={pageAnimation}
        initial='initial'
        animate='animate'
        exit='exit'>
        <AccountPageContainer />
      </motion.div>
    </Layout>
  );
};

export default PrivateRoute(AccountPage);
