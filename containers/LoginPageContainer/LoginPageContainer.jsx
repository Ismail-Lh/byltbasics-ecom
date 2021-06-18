import classes from './LoginPageContainer.module.scss';
import { Login, Register } from '../../components';

const LoginPageContainer = () => {
  return (
    <div className={classes.login__container}>
      <div className='container'>
        <div className={classes.login__grid}>
          <Login />
        </div>
      </div>
    </div>
  );
};

export default LoginPageContainer;
