import classes from './style.module.scss';

import { MyLink } from '..';
import { ProductPrice, ProductSale, ProductColors } from '..';

const ProductsCardInfo = ({
  product,
  productRoute,
  color,
  setColor,
  getSingleProduct,
}) => {
  return (
    <div className={classes.card__info}>
      <div className={classes.card__info_sale}>
        <ProductSale discountPer={product?.discountPer} />
      </div>

      <h2
        className={classes.card__info_name}
        onClick={() => getSingleProduct(product?.id, product?.gender, color)}>
        <MyLink route={productRoute}>{product?.name}</MyLink>
      </h2>

      <div className={classes.card__info_price}>
        <ProductPrice
          price={product?.price}
          discountPer={product?.discountPer}
        />
      </div>

      <div className={classes.card__info_colors}>
        <ProductColors
          color={color}
          setColor={setColor}
          productColors={product?.colors}
        />
      </div>
    </div>
  );
};

export default ProductsCardInfo;
