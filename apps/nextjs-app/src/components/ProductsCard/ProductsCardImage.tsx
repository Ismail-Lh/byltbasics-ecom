import Image from "next/image";

import type { Product } from "../../types";

import { useProductsContext } from "../../contexts/products_context";
import Button from "../Button/Button";
import MyLink from "../MyLink/MyLink";
import classes from "./style.module.scss";

type ProductsCardImageProps = {
  product: Product;
  productRoute: string;
  color: string;
};

/**
 * Renders the image component for a product card.
 *
 * @param {ProductsCardImageProps} props - The component props.
 * @param {Product} props.product - The product object.
 * @param {string} props.productRoute - The route for the product.
 * @param {string} props.color - The color of the product.
 * @returns {JSX.Element} The rendered component.
 */
function ProductsCardImage({
  product,
  productRoute,
  color,
}: ProductsCardImageProps): JSX.Element {
  const { getSingleProduct, getSimilarProducts, openProductModal }
    = useProductsContext();

  const handelClick = () => {
    getSingleProduct({
      productId: product?.id,
      gender: product?.gender,
      color,
    });
    openProductModal();
  };

  return (
    <div
      className={classes.card__image}
      onClick={() => {
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
      }}
    >
      <MyLink route={productRoute}>
        <Image
          src={`/assets/products/${product?.gender}/${product?.collections}/${product?.style}/${product?.name}/${color}/small/${product?.images[0]}`}
          alt={`${product?.name}-${color}`}
          layout="fill"
        />
      </MyLink>

      <Button handelClick={handelClick}>quick add</Button>

      {product?.discountPer && (
        <img
          src="/assets/sale-badge.svg"
          alt="sale-badge"
          className={classes.sale_badge}
        />
      )}
    </div>
  );
}

export default ProductsCardImage;
