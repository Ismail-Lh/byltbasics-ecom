import classes from './SuccessCheckoutPageContainer.module.scss';

import { FaCheckCircle } from 'react-icons/fa';
import { Button } from '../../components';

const SuccessCheckoutPageContainer = () => {
  return (
    <div className={classes.successCheckout}>
      <div className='container'>
        <div className={classes.successCheckout__container}>
          <div className={classes.confirmationMsg}>
            <FaCheckCircle />
            <h1>Thank you, your order has been confirmed!</h1>
          </div>

          <p className={classes.detailMsg}>
            Thank you for shopping whit us. We'll send a confirmation once your
            item has shipped, if you would like to check the status of your
            order(s) please go to your account.
          </p>

          <Button route='/account'>go to my account</Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessCheckoutPageContainer;