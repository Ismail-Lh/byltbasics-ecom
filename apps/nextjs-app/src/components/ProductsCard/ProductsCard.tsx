import { useState } from "react";
import classes from "./style.module.scss";

import type { Product } from "../../types";
import ProductsCardImage from "./ProductsCardImage";
import ProductsCardInfo from "./ProductsCardInfo";

type ProductsCardProps = {
  product: Product;
};

/**
 * Renders a card component for displaying product information.
 *
 * @param {ProductsCardProps} props - The component props.
 * @param {Product} props.product - The product object containing information about the product.
 * @returns {JSX.Element} The rendered card component.
 */
function ProductsCard({ product }: ProductsCardProps): JSX.Element {
  const [color, setColor] = useState(product?.colors[0]);

  const productRoute = `/products/${product?.route}/?gender=${product?.gender}&id=${product?.id}`;

  return (
    <div className={classes.card}>
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
    </div>
  );
}

export default ProductsCard;
