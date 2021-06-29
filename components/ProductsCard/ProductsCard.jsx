import { useState } from 'react';
import classes from './style.module.scss';

import { useProductsContext } from '../../contexts/products_context';

import ProductsCardImage from './ProductsCardImage';
import ProductsCardInfo from './ProductsCardInfo';
import { ProductModel } from '..';

const ProductsCard = ({ product }) => {
  const { getSingleProduct } = useProductsContext();

  const [color, setColor] = useState(product?.colors[0]);
  const [openProductModel, setOpenProductModel] = useState(false);

  const productRoute = `/products/${product?.route}/?gender=${product?.gender}&id=${product?.id}`;

  return (
    <div className={classes.card}>
      <ProductsCardImage
        product={product}
        productRoute={productRoute}
        getSingleProduct={getSingleProduct}
        color={color}
        setOpenProductModel={setOpenProductModel}
      />

      <ProductsCardInfo
        product={product}
        color={color}
        setColor={setColor}
        productRoute={productRoute}
        getSingleProduct={getSingleProduct}
      />

      <ProductModel
        openProductModel={openProductModel}
        setOpenProductModel={setOpenProductModel}
        product={product}
        color={color}
        setColor={setColor}
      />
    </div>
  );
};

export default ProductsCard;
