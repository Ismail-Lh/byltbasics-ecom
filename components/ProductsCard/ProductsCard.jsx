import { useState } from 'react';
import { motion } from 'framer-motion';
import classes from './style.module.scss';

import { fadeInUp } from '../../utils/animations';

import ProductsCardImage from './ProductsCardImage';
import ProductsCardInfo from './ProductsCardInfo';

const ProductsCard = ({ product }) => {
  const [color, setColor] = useState(product?.colors[0]);

  const productRoute = `/products/${product?.route}/?gender=${product?.gender}&id=${product?.id}`;

  return (
    <motion.div variants={fadeInUp} className={classes.card}>
      <ProductsCardImage
        product={product}
        productRoute={productRoute}
        color={color}
      />

      <ProductsCardInfo
        product={product}
        color={color}
        setColor={setColor}
        productRoute={productRoute}
      />
    </motion.div>
  );
};

export default ProductsCard;
