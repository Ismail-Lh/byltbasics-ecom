import dynamic from 'next/dynamic';

import classes from './AccountPageContainer.module.scss';

import { useAuthContext } from '../../contexts/auth_context';

const Alert = dynamic(() => import('../../components/Alert/Alert'));
const Loader = dynamic(() => import('../../components/Loader/Loader'));
const UserAccountInfo = dynamic(() =>
  import('../../components/UserAccountInfo/UserAccountInfo')
);
const UserAccountOrders = dynamic(() =>
  import('../../components/UserAccountOrders/UserAccountOrders')
);

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
