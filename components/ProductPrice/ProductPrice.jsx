import { formatPrice } from "../../utils/helpers";
import classes from "./ProductPrice.module.scss";

const ProductPrice = ({ price, discountPer }) => {
  const colorStyle = (discountPer) => {
    let style;

    style = { color: `${discountPer ? "#d84242" : "#000"}` };

    return style;
  };

  return (
    <div className={classes.product__price}>
      <span className={classes.new} style={colorStyle(discountPer)}>
        {formatPrice(price, discountPer)} USD
      </span>{" "}
      {discountPer && (
        <span className={classes.old}>{formatPrice(price)} USD</span>
      )}
    </div>
  );
};

export default ProductPrice;
