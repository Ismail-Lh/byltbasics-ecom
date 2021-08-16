import dynamic from 'next/dynamic';

import PrivateRoute from '../../HOC/PrivateRoute';
import { PageTransition } from '../../components';

const Layout = dynamic(() => import('../../components/Layout/Layout'));

const AccountPageContainer = dynamic(() =>
  import('../../containers/AccountPageContainer/AccountPageContainer')
);

const AccountPage = () => {
  return (
    <Layout title='Account | BYLT Basics'>
      <PageTransition>
        <AccountPageContainer />
      </PageTransition>
    </Layout>
  );
};

export default PrivateRoute(AccountPage);
