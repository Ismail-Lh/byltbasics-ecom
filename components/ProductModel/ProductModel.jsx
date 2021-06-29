import classes from './ProductModel.module.scss';
import { CloseIcon } from '../../Icons';
import { useState } from 'react';
import { SingleProductInfo } from '..';

const ProductModel = ({
  openProductModel,
  setOpenProductModel,
  product,
  color,
  setColor,
}) => {
  // const [color, setColor] = useState(product?.productColor);

  return (
    <div
      className={`${
        !openProductModel ? 'productModel' : 'productModel productModel__show'
      }`}>
      <div className={classes.productModel__content}>
        <div className={classes.closeBtn}>
          <button onClick={() => setOpenProductModel(false)}>
            <CloseIcon />
          </button>
        </div>

        <div className={classes.product}>
          <div className={classes.product__image}>
            <img
              src={`/assets/products/${product?.gender}/${product?.collections}/${product?.style}/${product?.name}/${color}/large/${product?.images[0]}`}
              alt={`${product?.name}-${color}`}
            />
          </div>

          <SingleProductInfo
            product={product}
            color={color}
            changeColor={setColor}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductModel;
