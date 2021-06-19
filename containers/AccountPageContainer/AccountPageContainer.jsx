import { useState } from 'react';
import { useRouter } from 'next/router';
import classes from './AccountPageContainer.module.scss';

import { useAuthContext } from '../../contexts/auth_context';
import { Alert, Loader } from '../../components';

const AccountPageContainer = () => {
  const { logout, user, setErr, err, loading, setLoading } = useAuthContext();
  const router = useRouter();

  const handleLogout = async () => {
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
          <h1>account page container</h1>
          <h2>{user.displayName}</h2>
          <h2>{user.email}</h2>
          <button onClick={handleLogout}>log out</button>
        </div>
      )}
    </div>
  );
};

export default AccountPageContainer;
