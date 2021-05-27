import { useEffect, useState } from 'react';
import classes from './SingleProductInfo.module.scss';
import { decAmount, formatPrice, incAmount } from '../../utils/helpers';
import { AmountBtn } from '..';
import { useCartContext } from '../../contexts/cart_context';

const SingleProductInfo = ({ product, color, changeColor }) => {
  const [size, setSize] = useState('');
  const { addToCart } = useCartContext();

  const [amount, setAmount] = useState(1);

  useEffect(() => {
    setSize('');
    setAmount(1);
  }, [color]);

  return (
    <div className={classes.singleProduct_info}>
      <div className={classes.productInfo}>
        <h1 className={classes.productInfo_title}>{product?.name}</h1>

        <div className={classes.productInfo_price}>
          <span className={classes.new}>
            {formatPrice(product?.price, product?.discountPer)} USD
          </span>{' '}
          {product?.discountPer && (
            <>
              <span className={classes.old}>
                {formatPrice(product?.price)} USD
              </span>
              <p>{product?.discountPer}% off</p>
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
          {product?.description}{' '}
          <button className={classes.btn_more}>Learn more</button>
        </p>
      </div>

      <div className={classes.productInfo_colors}>
        <p>
          Color: <span>{color}</span>
        </p>
        <div className={classes.colors}>
          {product?.colors?.map((clr, idx) => (
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
          {product?.sizes?.map((s, idx) => (
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

        <AmountBtn
          incAmount={() => incAmount(setAmount, product?.stock)}
          decAmount={() => decAmount(setAmount)}
          productAmount={amount}
        />
      </div>

      <div className={classes.productInfo_addToCart}>
        <button
          onClick={() =>
            size && addToCart(amount, size, color, product?.id, product)
          }>{`${size ? 'add to cart' : 'select a size'}`}</button>
      </div>
    </div>
  );
};

export default SingleProductInfo;
