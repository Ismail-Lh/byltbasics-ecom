import classes from './LoginPageContainer.module.scss';
import { Button, FormInput } from '../../components';

import useForm from '../../hooks/useForm';

const LoginPageContainer = () => {
  const { value, error, handleChange, handleSubmit } = useForm();

  return (
    <div className={classes.login__container}>
      <div className='container'>
        <div className={classes.login__grid}>
          <div className={classes.login__new}>
            <h1 className={classes.login__title}>new customers</h1>
            <p className={classes.login__text}>
              By creating an account with our store, you will be able to move
              through the checkout process faster, store multiple shipping
              addresses, view and track your orders in your account and more.
            </p>
            <Button color='black' route='/account/register'>
              creat account
            </Button>
          </div>

          <div className={classes.login__registered}>
            <h1 className={classes.login__title}>registered customers</h1>

            <form className={classes.login__form} onSubmit={handleSubmit}>
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
        </div>
      </div>
    </div>
  );
};

export default LoginPageContainer;
