import { formatPrice } from "../../utils/helpers";
import classes from "./ProductPrice.module.scss";

type ProductPriceProps = {
  price: number;
  discountPer?: number;
};

/**
 * Renders the price of a product with optional discount.
 *
 * @param {number} price - The price of the product.
 * @param {number} discountPer - The discount percentage applied to the product.
 * @returns {JSX.Element} - The rendered component displaying the product price.
 */
function ProductPrice({ price, discountPer }: ProductPriceProps): JSX.Element {
  return (
    <div className={classes.product__price}>
      <span
        className={classes.new}
        style={{ color: `${discountPer ? "#d84242" : "#000"}` }}
      >
        {formatPrice(price, discountPer)}
        {" "}
        USD
      </span>
      {" "}
      {discountPer && (
        <span className={classes.old}>
          {formatPrice(price)}
          {" "}
          USD
        </span>
      )}
    </div>
  );
}

export default ProductPrice;
