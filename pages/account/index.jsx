import dynamic from 'next/dynamic';

import PrivateRoute from '../../HOC/PrivateRoute';

const AccountPageContainer = dynamic(() =>
  import('../../containers/AccountPageContainer/AccountPageContainer')
);

const AccountPage = () => {
  return <AccountPageContainer />;
};

export default PrivateRoute(AccountPage);
