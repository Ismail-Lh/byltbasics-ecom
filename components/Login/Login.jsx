import { useState } from 'react';
import { useRouter } from 'next/router';
import classes from './Login.module.scss';

import { useAuthContext } from '../../contexts/auth_context';
import useForm from '../../hooks/useForm';
import { Button, FormInput } from '..';

const Login = () => {
  const { value, error, handleChange, handleSubmit } = useForm();
  const { login } = useAuthContext();

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');
  const router = useRouter();

  const handleLogin = async e => {
    e.preventDefault();
    handleSubmit();

    try {
      setLoading(true);
      await login(value.email, value.password);
      router.push('/account');
    } catch (error) {
      setErr(error.message);
    }

    setLoading(false);
  };

  return (
    <div className={classes.login}>
      <h1>registered customers</h1>
      {err && <h3>{err}</h3>}
      <form className={classes.login__form} onSubmit={handleLogin}>
        <FormInput
          name='email'
          id='email'
          placeholder='email address'
          handleChange={handleChange}
          value={value.email}
          error={error.email}
        />
        <FormInput
          type='password'
          name='password'
          id='password'
          placeholder='password'
          handleChange={handleChange}
          value={value.password}
          error={error.password}
        />

        <Button type='submit' color='black'>
          login
        </Button>
      </form>
    </div>
  );
};

export default Login;
