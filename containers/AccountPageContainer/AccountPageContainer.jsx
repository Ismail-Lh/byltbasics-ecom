import { useRouter } from 'next/router';
import classes from './AccountPageContainer.module.scss';

import { useAuthContext } from '../../contexts/auth_context';
import { Alert, Button, Loader } from '../../components';

const AccountPageContainer = () => {
  const { logout, user, setErr, err, loading, setLoading } = useAuthContext();
  const router = useRouter();

  const handelLogout = async () => {
    try {
      setErr('');
      setLoading(true);
      await logout();
      router.push('/account/login');
      setLoading(false);
    } catch (error) {
      setErr(error.message);
    }
  };

  return (
    <div className={classes.account__container}>
      {loading ? (
        <Loader message='please until your log out...' />
      ) : (
        <div className='container'>
          {err && <Alert error>{err}</Alert>}

          <div className={classes.account__grid}>
            <div className={classes.account__user}>
              <h2>account info</h2>
              <div className={classes.userInfo}>
                <p>
                  <span>user name:</span> {user.displayName}
                </p>
                <p>
                  <span>user email address:</span> {user.email}
                </p>
              </div>
              <Button color='black' handelClick={handelLogout}>
                log out
              </Button>
            </div>
            <div className={classes.account__orders}>
              <h2>recent orders</h2>
              <p>you have not placed any order yet.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountPageContainer;
