import { useState } from 'react';
import { useRouter } from 'next/router';
import classes from './Login.module.scss';

import { useAuthContext } from '../../contexts/auth_context';
import useForm from '../../hooks/useForm';
import { Alert, Button, FormInput, MyLink } from '..';

const Login = () => {
  const { value, error, handleChange, handleSubmit } = useForm();
  const { login, resetPassword } = useAuthContext();

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');
  const router = useRouter();

  const [isResetPassword, setIsResetPassword] = useState(false);
  const [message, setMessage] = useState('');

  const handleLogin = async e => {
    e.preventDefault();
    handleSubmit();

    try {
      setErr('');
      setLoading(true);
      await login(value.email, value.password);
      router.push('/account');
    } catch (error) {
      setErr(error.message);
    }

    setLoading(false);
  };

  const handleReset = async e => {
    e.preventDefault();

    try {
      setErr('');
      setMessage('');
      setLoading(true);
      await resetPassword(value.email);
      setMessage('check your email inbox for more information.');
    } catch (error) {
      setErr(error.message);
    }
  };

  return (
    <div className={classes.login}>
      {!isResetPassword ? (
        <>
          <h1>registered customers</h1>
          {err && <Alert error> {err}</Alert>}
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

          <div className={classes.login__create}>
            <MyLink route='/account/register'>create an account</MyLink>
            <button
              className={classes.btn}
              onClick={() => setIsResetPassword(true)}>
              forgot your password?
            </button>
          </div>
        </>
      ) : (
        <>
          <h1>reset password</h1>
          {err && <Alert error> {err}</Alert>}

          {message && <Alert>{message}</Alert>}
          <p className={classes.resetText}>
            Please enter your email address below. You will receive a link to
            reset your password.
          </p>

          <form className={classes.login__form} onSubmit={handleReset}>
            <FormInput
              name='email'
              id='email'
              placeholder='email address'
              handleChange={handleChange}
              value={value.email}
              error={error.email}
            />

            <Button type='submit' color='black'>
              submit
            </Button>
          </form>

          <button
            className={classes.btn}
            onClick={() => setIsResetPassword(false)}>
            cancel
          </button>
        </>
      )}
    </div>
  );
};

export default Login;
