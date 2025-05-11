import CheckCircleIcon from "../../Icons/CheckCircleIcon";
import Button from "../../components/Button/Button";
import classes from "./SuccessCheckoutPageContainer.module.scss";

/**
 * Renders the success checkout page container.
 * This component displays a confirmation message and a button to navigate to the user's account.
 */

function SuccessCheckoutPageContainer() {
  return (
    <div className={classes.successCheckout}>
      <div className="container">
        <div className={classes.successCheckout__container}>
          <div className={classes.confirmationMsg}>
            <CheckCircleIcon />
            <h1>Thank you, your order has been confirmed!</h1>
          </div>

          <p className={classes.detailMsg}>
            Thank you for shopping whit us. We'll send a confirmation once your
            item has shipped, if you would like to check the status of your
            order(s) please go to your account.
          </p>

          <Button route="/account">go to my account</Button>
        </div>
      </div>
    </div>
  );
}

export default SuccessCheckoutPageContainer;
