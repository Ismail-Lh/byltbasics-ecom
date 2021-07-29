import { useEffect, useState } from 'react';
import classes from './SingleProductInfo.module.scss';

import { useCartContext } from '../../contexts/cart_context';

import {
  ProductPrice,
  ProductSale,
  ProductColors,
  ProductSizes,
  ProductQuantity,
} from '..';
import { fadeInUp, stagger } from '../../utils/animations';
import { motion } from 'framer-motion';

const SingleProductInfo = ({ product, color, changeColor }) => {
  const [size, setSize] = useState('');
  const { addToCart } = useCartContext();

  const [amount, setAmount] = useState(1);

  useEffect(() => {
    setSize('');
    setAmount(1);
  }, [color]);

  return (
    <motion.div
      className={classes.singleProduct_info}
      initial='initial'
      animate='animate'
      variants={stagger}>
      <div className={classes.product}>
        <motion.div variants={fadeInUp} className={classes.product__sale}>
          <ProductSale discountPer={product?.discountPer} />
        </motion.div>

        <motion.h1 variants={fadeInUp} className={classes.product__title}>
          {product?.name}
        </motion.h1>

        <motion.div variants={fadeInUp} className={classes.product__price}>
          <ProductPrice
            price={product?.price}
            discountPer={product?.discountPer}
          />
        </motion.div>
      </div>

      <motion.p variants={fadeInUp} className={classes.product__payment}>
        4 interest-free payments. Available for orders above $35.{' '}
        <span>Klarna</span>.{' '}
        <button className={classes.btn_more}>Learn more</button>
      </motion.p>

      <motion.p variants={fadeInUp} className={classes.product__description}>
        {product?.description}{' '}
        <button className={classes.btn_more}>Learn more</button>
      </motion.p>

      <motion.div variants={fadeInUp} className={classes.product__colors}>
        <ProductColors
          productColors={product?.colors}
          color={color}
          setColor={changeColor}
        />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <ProductSizes
          productSizes={product?.sizes}
          size={size}
          setSize={setSize}
        />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <ProductQuantity
          stock={product?.stock}
          amount={amount}
          setAmount={setAmount}
        />
      </motion.div>

      <motion.div variants={fadeInUp} className={classes.product__addToCart}>
        <button
          onClick={() =>
            size && addToCart(amount, size, color, product?.id, product)
          }>{`${size ? 'add to cart' : 'select a size'}`}</button>
      </motion.div>
    </motion.div>
  );
};

export default SingleProductInfo;
