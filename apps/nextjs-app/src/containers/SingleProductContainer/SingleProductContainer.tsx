import dynamic from "next/dynamic";
import { useState } from "react";

import SingleProductImages from "../../components/SingleProductImages/SingleProductImages";
import SingleProductInfo from "../../components/SingleProductInfo/SingleProductInfo";
import { useProductsContext } from "../../contexts/products_context";
import classes from "./SingleProductContainer.module.scss";

const ProductsSliderSection = dynamic(
  () => import("../../sections/ProductsSliderSection/ProductsSliderSection"),
);

/**
 * Renders a container component for displaying a single product.
 *
 * @returns The SingleProductContainer component.
 */

function SingleProductContainer() {
  const { single_product: product, similar_products: products }
    = useProductsContext();

  const [color, setColor] = useState(product?.product_color);

  return (
    <div className={classes.singleProduct}>
      <div className="container">
        <div className={classes.singleProduct_container}>
          <SingleProductImages
            product={product?.single_product}
            color={color}
          />
          <SingleProductInfo
            product={product?.single_product}
            color={color}
            changeColor={setColor}
          />
        </div>

        <ProductsSliderSection title="you my also like" products={products} />
      </div>
    </div>
  );
}

export default SingleProductContainer;
