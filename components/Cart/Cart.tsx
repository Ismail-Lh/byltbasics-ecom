import { motion } from "framer-motion";
import dynamic from "next/dynamic";
// import { loadStripe } from '@stripe/stripe-js';
// import axios from 'axios';

import CloseIcon from "../../Icons/CloseIcon";
import { useAuthContext } from "../../contexts/auth_context";
import { useCartContext } from "../../contexts/cart_context";
import { cartVariants } from "../../utils/animations";
import Button from "../Button/Button";
import classes from "./Cart.module.scss";

const CartItems = dynamic(() => import("../CartItems/CartItems"));

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY);

/**
 * Renders the Cart component.
 *
 * @returns JSX.Element representing the Cart component.
 */
function Cart() {
  const { closeCart, cart: products, clearCart, subTotal } = useCartContext();

  const { user } = useAuthContext();

  const createCheckoutSession = async () => {
    // //  Get Stripe.js instance
    // const stripe = await stripePromise;
    // // Call the backend to create the checkout session
    // const checkoutSession = await axios.post('/api/create-checkout-session', {
    //   items: products,
    //   email: user.email,
    // });
    // // When the customer clicks on the button, redirect them to Stripe Checkout.
    // const result = await stripe.redirectToCheckout({
    //   sessionId: checkoutSession.data.id,
    // });
    // if (result.error) alert(result.error.message);
  };

  return (
    <motion.div
      variants={cartVariants}
      initial="initial"
      animate="animate"
      exit="initial"
      className={classes.cart}
    >
      <div className={classes.cart__header}>
        <div className={classes.close}>
          <button type="button" onClick={closeCart}>
            <CloseIcon />
          </button>
        </div>

        <h1>your cart</h1>
      </div>

      <div className={classes.cart__freeShipping}>
        <p>free shipping on orders of $100+</p>
      </div>

      {products?.length === 0 ? (
        <p className={classes.cart__empty}>Your cart is currently empty.</p>
      ) : (
        <>
          <CartItems />

          <div className={classes.cart__subtotal}>
            <p className={classes.cart__subtotal_title}>subtotal:</p>
            <p className={classes.cart__subtotal_price}>{subTotal} USD</p>
          </div>

          <div className={classes.cart__clear}>
            <Button handelClick={clearCart}>Clear cart</Button>
          </div>

          <div className={classes.cart__checkout}>
            {!user ? (
              <Button route="/account/login">sign in to checkout</Button>
            ) : (
              <Button role="link" handelClick={createCheckoutSession}>
                proceed to checkout
              </Button>
            )}
          </div>
        </>
      )}
    </motion.div>
  );
}

export default Cart;
