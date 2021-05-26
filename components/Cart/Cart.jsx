import { Button, MyLink } from '..';
import { useCartContext } from '../../contexts/cart_context';
import { CloseIcon } from '../../Icons';
import { formatPrice } from '../../utils/helpers';

import classes from './Cart.module.scss';

const Cart = () => {
  const {
    isCartOpen,
    closeCart,
    cart: products,
    removeFromCart,
    clearCart,
    subTotal,
  } = useCartContext();

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
                max,
                price,
                discountPer,
                image,
                type,
                category,
                route,
                gender,
              }) => (
                <div className={classes.product} key={id}>
                  <div className={classes.product__img}>
                    <MyLink route={`/products/${route}`}>
                      <img
                        src={`/assets/products/${gender}/${category}/${type}/${name}/${color}/small/${image}`}
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
                      <p className={classes.productQty}>qty: {amount}</p>

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
            <Button color='black' handelClick={clearCart}>
              Clear cart
            </Button>
          </div>

          <div className={classes.cart__checkout}>
            <Button color='black' route='/pages/checkout'>
              checkout
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
