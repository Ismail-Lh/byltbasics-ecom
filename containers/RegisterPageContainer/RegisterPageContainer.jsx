import { useState } from 'react';
import { useRouter } from 'next/router';

import classes from './RegisterPageContainer.module.scss';

import useForm from '../../hooks/useForm';
import { useAuthContext } from '../../contexts/auth_context';
import { Button, FormInput, MyLink } from '../../components';

const RegisterPageContainer = () => {
  const { value, error, handleChange, handleSubmit } = useForm();
  const { signUp } = useAuthContext();

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');
  const router = useRouter();

  const handleSignUp = async e => {
    e.preventDefault();
    handleSubmit();

    try {
      setLoading(true);
      await signUp(value.email, value.password_1);
      router.push('/account');
    } catch {
      setErr('Failed to create an account');
    }

    setLoading(false);
  };

  return (
    <div className={classes.register}>
      <div className='container'>
        <div className={classes.register__container}>
          <h1 className={classes.register__title}>create account</h1>
          {err && <h3>{err}</h3>}
          <form className={classes.register__form} onSubmit={handleSignUp}>
            <FormInput
              name='email'
              id='email'
              placeholder='email'
              label='email'
              handleChange={handleChange}
              value={value.email}
              error={error.email}
            />
            <FormInput
              type='password'
              name='password_1'
              id='password_1'
              placeholder='password'
              label='password'
              handleChange={handleChange}
              value={value.password_1}
              error={error.password_1}
            />
            <FormInput
              type='password'
              name='password_2'
              id='password_2'
              placeholder='confirm password'
              label='confirm password'
              handleChange={handleChange}
              value={value.password_2}
              error={error.password_2}
            />

            <Button disabled={loading} color='black' type='submit'>
              create account
            </Button>
          </form>

          <MyLink route='/account/login'>back to login</MyLink>
        </div>
      </div>
    </div>
  );
};

export default RegisterPageContainer;
