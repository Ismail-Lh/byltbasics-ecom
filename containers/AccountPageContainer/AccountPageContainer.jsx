import { useState } from 'react';
import { useRouter } from 'next/router';
import classes from './AccountPageContainer.module.scss';

import { useAuthContext } from '../../contexts/auth_context';

const AccountPageContainer = () => {
  const [err, setErr] = useState('');
  const { logout, user } = useAuthContext();
  const router = useRouter();

  const handleLogout = async () => {
    setErr('');

    try {
      await logout();
      router.push('/account/login');
    } catch (error) {
      setErr(error.message);
    }
  };

  return (
    <div className={classes.account__container}>
      <div className='container'>
        <h1>account page container</h1>
        <h2>{user.displayName}</h2>
        <h2>{user.email}</h2>
        <button onClick={handleLogout}>log out</button>
      </div>
    </div>
  );
};

export default AccountPageContainer;
