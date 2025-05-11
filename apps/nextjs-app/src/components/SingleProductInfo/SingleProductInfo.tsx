import { useEffect, useState } from "react";
import classes from "./SingleProductInfo.module.scss";

import { useCartContext } from "../../contexts/cart_context";
import type { Product } from "../../types";
import ProductColors from "../ProductColors/ProductColors";
import ProductPrice from "../ProductPrice/ProductPrice";
import ProductQuantity from "../ProductQuantity/ProductQuantity";
import ProductSale from "../ProductSale/ProductSale";
import ProductSizes from "../ProductSizes/ProductSizes";

type SingleProductInfoProps = {
  product: Product;
  color: string;
  changeColor: (color: string) => void;
};

/**
 * Renders the information for a single product.
 *
 * @param {SingleProductInfoProps} props - The component props.
 * @returns {JSX.Element} The rendered component.
 */

function SingleProductInfo({
  product,
  color,
  changeColor,
}: SingleProductInfoProps): JSX.Element {
  const [size, setSize] = useState("");
  const { addToCart } = useCartContext();

  const [amount, setAmount] = useState(1);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setSize("");
    setAmount(1);
  }, [color]);

  return (
    <div className={classes.singleProduct_info}>
      <div className={classes.product}>
        <div className={classes.product__sale}>
          <ProductSale discountPer={product?.discountPer} />
        </div>

        <h1 className={classes.product__title}>{product?.name}</h1>

        <div className={classes.product__price}>
          <ProductPrice
            price={product?.price}
            discountPer={product?.discountPer}
          />
        </div>
      </div>

      <p className={classes.product__payment}>
        4 interest-free payments. Available for orders above $35.{" "}
        <span>Klarna</span>.{" "}
        <button type="button" className={classes.btn_more}>
          Learn more
        </button>
      </p>

      <p className={classes.product__description}>
        {product?.description}{" "}
        <button type="button" className={classes.btn_more}>
          Learn more
        </button>
      </p>

      <div className={classes.product__colors}>
        <ProductColors
          productColors={product?.colors}
          color={color}
          setColor={changeColor}
        />
      </div>

      <div>
        <ProductSizes
          productSizes={product?.sizes}
          size={size}
          setSize={setSize}
        />
      </div>

      <div>
        <ProductQuantity
          stock={product?.stock}
          amount={amount}
          setAmount={setAmount}
        />
      </div>

      <div className={classes.product__addToCart}>
        <button
          type="button"
          onClick={() =>
            size && addToCart({ amount, size, color, id: product?.id, product })
          }
        >{`${size ? "add to cart" : "select a size"}`}</button>
      </div>
    </div>
  );
}

export default SingleProductInfo;
