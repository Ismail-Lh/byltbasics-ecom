import PrivateRoute from '../../HOC/PrivateRoute';

import { AccountPageContainer } from '../../containers';

const AccountPage = () => {
  return <AccountPageContainer />;
};

export default PrivateRoute(AccountPage);
