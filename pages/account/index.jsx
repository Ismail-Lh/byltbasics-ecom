import dynamic from 'next/dynamic';

import PrivateRoute from '../../HOC/PrivateRoute';

const Layout = dynamic(() => import('../../components/Layout/Layout'));

const PageTransition = dynamic(() =>
  import('../../components/PageTransition/PageTransition')
);

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
