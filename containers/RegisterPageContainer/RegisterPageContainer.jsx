import classes from './RegisterPageContainer.module.scss';
import { Button, FormInput, MyLink } from '../../components';

const RegisterPageContainer = () => {
  return (
    <div className={classes.register}>
      <div className='container'>
        <div className={classes.register__container}>
          <h1 className={classes.register__title}>create account</h1>

          <form className={classes.register__form}>
            <FormInput
              name='name'
              id='first name'
              placeholder='first name'
              label='first name'
            />
            <FormInput
              name='name'
              id='last name'
              placeholder='last name'
              label='last name'
            />
            <FormInput
              name='email'
              id='email'
              placeholder='email'
              label='email'
            />
            <FormInput
              type='password'
              name='password'
              id='password'
              placeholder='password'
              label='password'
            />
            <FormInput
              type='password'
              name='password-2'
              id='password-2'
              placeholder='confirm password'
              label='confirm password'
            />

            <Button color='black' type='submit'>
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
