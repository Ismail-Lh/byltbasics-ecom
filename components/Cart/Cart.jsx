import { useState } from 'react';
import { AmountBtn, MyLink } from '..';
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
    product_amount,
  } = useCartContext();

  // const totalPrice = (price, amount, discountPer) => {
  //   let total_price = price * amount;

  //   let sub_total = formatPrice(total_price, discountPer);
  //   return sub_total;
  // };

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
                  <div className={classes.amountBtn}>
                    <AmountBtn stock={max} productAmount={amount} />
                  </div>

                  <p className={classes.price}>
                    {formatPrice(price, discountPer, product_amount)} USD
                  </p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Cart;
