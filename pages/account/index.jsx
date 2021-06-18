import { AccountPageContainer } from '../../containers';

import PrivateRoute from '../../HOC/PrivateRoute';

const AccountPage = () => {
  return <AccountPageContainer />;
};

export default PrivateRoute(AccountPage);
