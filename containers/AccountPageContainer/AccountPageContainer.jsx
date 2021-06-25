import classes from './AccountPageContainer.module.scss';

import { useAuthContext } from '../../contexts/auth_context';
import {
  Alert,
  Loader,
  UserAccountInfo,
  UserAccountOrders,
} from '../../components';

const AccountPageContainer = () => {
  const { err, loading } = useAuthContext();

  return (
    <div className={classes.account__container}>
      {loading ? (
        <Loader message='please until your log out...' />
      ) : (
        <div className='container'>
          {err && <Alert error>{err}</Alert>}

          <div className={classes.account__grid}>
            <UserAccountInfo />

            <UserAccountOrders />
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountPageContainer;
