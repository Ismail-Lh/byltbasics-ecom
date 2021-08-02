import dynamic from 'next/dynamic';
import { Layout } from '../../components';

import PrivateRoute from '../../HOC/PrivateRoute';

const AccountPageContainer = dynamic(() =>
  import('../../containers/AccountPageContainer/AccountPageContainer')
);

const AccountPage = () => {
  return (
    <Layout title='Account | BYLT Basics'>
      <AccountPageContainer />
    </Layout>
  );
};

export default PrivateRoute(AccountPage);
