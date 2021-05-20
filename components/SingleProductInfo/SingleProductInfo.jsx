import { useState } from 'react';
import classes from './SingleProductInfo.module.scss';
import { formatPrice } from '../../utils/helpers';
import { useProductsContext } from '../../contexts/products_context';

const SingleProductInfo = ({
  name,
  price,
  discountPer,
  description,
  colors,
  color,
  changeColor,
  sizes,
}) => {
  const [size, setSize] = useState('');

  return (
    <div className={classes.singleProduct_info}>
      <div className={classes.productInfo}>
        <h1 className={classes.productInfo_title}>{name}</h1>

        <div className={classes.productInfo_price}>
          <span className={classes.new}>
            {formatPrice(price, discountPer)} USD
          </span>{' '}
          {discountPer && (
            <>
              <span className={classes.old}>{formatPrice(price)} USD</span>
              <p>{discountPer}% off</p>
            </>
          )}
        </div>
      </div>

      <div className={classes.productInfo_payment}>
        <p>
          4 interest-free payments. Available for orders above $35.{' '}
          <span>Klarna</span>.{' '}
          <button className={classes.btn_more}>Learn more</button>
        </p>
      </div>

      <div className={classes.productInfo_description}>
        <p>
          {description} <button className={classes.btn_more}>Learn more</button>
        </p>
      </div>

      <div className={classes.productInfo_colors}>
        <p>
          Color: <span>{color}</span>
        </p>
        <div className={classes.colors}>
          {colors?.map((clr, idx) => (
            <div key={idx} onClick={() => changeColor(clr)}>
              <img
                src={`/assets/products/colors/${clr}.jpg`}
                alt={clr}
                className={`${clr === color && 'active-color'}`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={classes.productInfo_sizes}>
        <p className={classes.left}>
          size <button className={classes.btn_more}>size guide</button>
        </p>

        <div className={classes.right}>
          {sizes?.map((s, idx) => (
            <button
              key={idx}
              className={`${s.size === size && 'active-size'}`}
              disabled={!s.isAvailable}
              onClick={() => setSize(s.size)}>
              {s.size}
            </button>
          ))}
        </div>
      </div>

      <div className={classes.productInfo_qty}>
        <p>quantity</p>

        <div>
          <button> - </button>
          <span> 1 </span>
          <button> + </button>
        </div>
      </div>

      <div className={classes.productInfo_addToCart}>
        <button disabled={size}>{`${
          size ? 'add to cart' : 'select a size'
        }`}</button>
      </div>
    </div>
  );
};

export default SingleProductInfo;
