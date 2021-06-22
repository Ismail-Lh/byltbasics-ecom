import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

import classes from './Cart.module.scss';
import { useCartContext } from '../../contexts/cart_context';

import { formatPrice } from '../../utils/helpers';
import { AmountBtn, Button, MyLink } from '..';
import { CloseIcon } from '../../Icons';
import { useAuthContext } from '../../contexts/auth_context';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.stripe_public_key);

const Cart = () => {
  const {
    isCartOpen,
    closeCart,
    cart: products,
    removeFromCart,
    clearCart,
    subTotal,
    toggleCartAmount,
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
          <div className={classes.cart__products}>
            {products?.map(
              ({
                id,
                name,
                color,
                size,
                amount,
                price,
                discountPer,
                image,
                collections,
                style,
                route,
                gender,
              }) => (
                <div className={classes.product} key={id}>
                  <div className={classes.product__img}>
                    <MyLink route={`/products/${route}`}>
                      <img
                        src={`/assets/products/${gender}/${collections}/${style}/${name}/${color}/small/${image}`}
                        alt={`${name}-${color}-${size}`}
                      />
                    </MyLink>
                  </div>

                  <div className={classes.product__info}>
                    <div className={classes.product__info_1}>
                      <div>
                        <h2 className={classes.name}>
                          <MyLink route={`/products/${route}`}>{name}</MyLink>
                        </h2>
                        <p className={classes.color}>color: {color}</p>
                        <p className={classes.size}>size: {size}</p>
                      </div>
                      <div className={classes.deleteProduct}>
                        <button onClick={() => removeFromCart(id)}>
                          <CloseIcon />
                        </button>
                      </div>
                    </div>

                    <div className={classes.product__info_2}>
                      <AmountBtn
                        productAmount={amount}
                        incAmount={() => toggleCartAmount(id, 'inc')}
                        decAmount={() => toggleCartAmount(id, 'dec')}
                      />

                      <p className={classes.price}>
                        {formatPrice(price, discountPer, amount)} USD
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>

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
