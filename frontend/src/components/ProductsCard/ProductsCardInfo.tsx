import classes from "./style.module.scss";

import { useProductsContext } from "../../contexts/products_context";
import type { Product } from "../../types";
import MyLink from "../MyLink/MyLink";
import ProductColors from "../ProductColors/ProductColors";
import ProductPrice from "../ProductPrice/ProductPrice";
import ProductSale from "../ProductSale/ProductSale";

type ProductCardInfoProps = {
  product: Product;
  productRoute: string;
  color: string;
  setColor: (color: string) => void;
};

function ProductsCardInfo({
  product,
  productRoute,
  color,
  setColor,
}: ProductCardInfoProps) {
  const { getSingleProduct, getSimilarProducts } = useProductsContext();

  const handelClick = () => {
    getSingleProduct({
      productId: product?.id,
      gender: product?.gender,
      color,
    });
    getSimilarProducts({
      collection: product?.collections,
      gender: product?.gender,
      productId: product?.id,
    });
  };

  return (
    <div className={classes.card__info}>
      <div className={classes.card__info_sale}>
        <ProductSale discountPer={product?.discountPer} />
      </div>

      <h2 className={classes.card__info_name} onClick={handelClick}>
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
}

export default ProductsCardInfo;
