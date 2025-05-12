import classes from "./ProductSale.module.scss";

type ProductSaleProps = {
  discountPer?: number;
};

/**
 * Renders a product sale component with the specified discount percentage.
 *
 * @param {object} props - The component props.
 * @param {number} props.discountPer - The discount percentage.
 * @returns {JSX.Element} The rendered product sale component.
 */
function ProductSale({ discountPer }: ProductSaleProps): JSX.Element {
  return (
    <>
      {discountPer && (
        <p className={classes.productSale}>
          sale
          {discountPer}
          % off
        </p>
      )}
    </>
  );
}

export default ProductSale;
