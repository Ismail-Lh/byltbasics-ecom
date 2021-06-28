import classes from './style.module.scss';

import { MyLink } from '..';
import ProductsCardPrice from './ProductsCardPrice';
import ProductsCardColors from './ProductsCardColors';

const ProductsCardInfo = ({
  product,
  productRoute,
  color,
  setColor,
  getSingleProduct,
}) => {
  return (
    <div className={classes.card__info}>
      {product?.discountPer && (
        <p className={classes.card__info_sale}>
          sale {product?.discountPer}% off
        </p>
      )}

      <h2
        className={classes.card__info_name}
        onClick={() => getSingleProduct(product?.id, product?.gender, color)}>
        <MyLink route={productRoute}>{product?.name}</MyLink>
      </h2>

      <ProductsCardPrice product={product} />

      <ProductsCardColors color={color} setColor={setColor} product={product} />
    </div>
  );
};

export default ProductsCardInfo;
