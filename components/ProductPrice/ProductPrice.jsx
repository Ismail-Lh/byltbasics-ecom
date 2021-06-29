import classes from './ProductPrice.module.scss';
import { formatPrice } from '../../utils/helpers';

const ProductPrice = ({ product }) => {
  const colorStyle = discountPer => {
    let style;

    style = { color: `${discountPer ? '#d84242' : '#000'}` };

    return style;
  };

  return (
    <div className={classes.product__price}>
      <span className={classes.new} style={colorStyle(product?.discountPer)}>
        {formatPrice(product?.price, product?.discountPer)} USD
      </span>{' '}
      {product?.discountPer && (
        <span className={classes.old}>{formatPrice(product?.price)} USD</span>
      )}
    </div>
  );
};

export default ProductPrice;
