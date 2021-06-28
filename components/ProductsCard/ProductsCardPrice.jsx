import classes from './style.module.scss';
import { formatPrice } from '../../utils/helpers';

const ProductsCardPrice = ({ product }) => {
  const colorStyle = discountPer => {
    let style;

    style = { color: `${discountPer ? '#d84242' : '#000'}` };

    return style;
  };

  return (
    <div className={classes.card__info_price}>
      <span className={classes.new} style={colorStyle(product?.discountPer)}>
        {formatPrice(product?.price, product?.discountPer)} USD
      </span>{' '}
      {product?.discountPer && (
        <span className={classes.old}>{formatPrice(product?.price)} USD</span>
      )}
    </div>
  );
};

export default ProductsCardPrice;
