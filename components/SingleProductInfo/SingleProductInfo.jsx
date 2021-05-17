import { formatPrice } from '../../utils/helpers';
import classes from './SingleProductInfo.module.scss';

const SingleProductInfo = ({ name, price, discountPer }) => {
  return (
    <div className={classes.singleProduct_info}>
      <div className={classes.productInfo}>
        <h1 className={classes.productInfo_title}>{name}</h1>

        <div className={classes.productInfo_price}>
          <span className={classes.new}>
            {formatPrice(price, discountPer)} USD
          </span>{' '}
          {discountPer && (
            <span className={classes.old}>{formatPrice(price)} USD</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProductInfo;
