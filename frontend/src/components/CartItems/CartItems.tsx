import CloseIcon from "../../Icons/CloseIcon";
import { useCartContext } from "../../contexts/cart_context";
import type { CartProduct, Product } from "../../types";
import { formatPrice } from "../../utils/helpers";
import AmountBtn from "../AmountBtn/AmountBtn";
import MyLink from "../MyLink/MyLink";
import classes from "./CartItems.module.scss";

/**
 * Renders the list of items in the cart.
 */
function CartItems() {
  const { cart: products, removeFromCart, toggleCartAmount } = useCartContext();

  return (
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
        }: CartProduct) => (
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
                  <button type="button" onClick={() => removeFromCart(id)}>
                    <CloseIcon />
                  </button>
                </div>
              </div>

              <div className={classes.product__info_2}>
                <AmountBtn
                  productAmount={amount}
                  incAmount={() => toggleCartAmount(id, "inc")}
                  decAmount={() => toggleCartAmount(id, "dec")}
                />

                <p className={classes.price}>
                  {formatPrice(price, discountPer, amount)} USD
                </p>
              </div>
            </div>
          </div>
        ),
      )}
    </div>
  );
}

export default CartItems;
