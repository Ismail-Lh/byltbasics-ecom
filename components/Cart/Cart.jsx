import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

import classes from './Cart.module.scss';
import { useCartContext } from '../../contexts/cart_context';
import { useAuthContext } from '../../contexts/auth_context';

import { Button, CartItems } from '..';
import { CloseIcon } from '../../Icons';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.stripe_public_key);

const Cart = () => {
  const {
    isCartOpen,
    closeCart,
    cart: products,
    clearCart,
    subTotal,
  } = useCartContext();

  const { user } = useAuthContext();

  const createCheckoutSession = async () => {
    //  Get Stripe.js instance
    const stripe = await stripePromise;

    // Call the backend to create the checkout session
    const checkoutSession = await axios.post('/api/create-checkout-session', {
      items: products,
      email: user.email,
    });

    // When the customer clicks on the button, redirect them to Stripe Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) alert(result.error.message);
  };

  return (
    <div className={`${isCartOpen ? 'cart cart__show' : 'cart'}`}>
      <div className={classes.cart__header}>
        <div className={classes.close}>
          <button onClick={closeCart}>
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
              <Button route='/account/login'>sign in to checkout</Button>
            ) : (
              <Button role='link' handelClick={createCheckoutSession}>
                proceed to checkout
              </Button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
