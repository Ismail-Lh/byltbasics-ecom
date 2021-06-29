import { useEffect, useState } from 'react';
import classes from './SingleProductInfo.module.scss';

import { useCartContext } from '../../contexts/cart_context';
import { decAmount, formatPrice, incAmount } from '../../utils/helpers';
import { AmountBtn, ProductPrice, ProductSale, ProductColors } from '..';

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
        <div className={classes.productInfo_sale}>
          <ProductSale product={product} />
        </div>

        <h1 className={classes.productInfo_title}>{product?.name}</h1>

        <div className={classes.productInfo_price}>
          <ProductPrice product={product} />
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
        <ProductColors product={product} color={color} setColor={changeColor} />
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
