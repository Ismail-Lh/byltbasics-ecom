import classes from "./ProductSizes.module.scss";

type ProductSizesProps = {
  productSizes: { size: string; isAvailable: boolean }[];
  size: string;
  setSize: (size: string) => void;
};

/**
 * Renders the product sizes component.
 *
 * @param {object} props - The component props.
 * @param {Array} props.productSizes - The available product sizes.
 * @param {string} props.size - The selected size.
 * @param {Function} props.setSize - The function to set the selected size.
 * @returns {JSX.Element} The rendered component.
 */
function ProductSizes({
  productSizes,
  size,
  setSize,
}: ProductSizesProps): JSX.Element {
  return (
    <div className={classes.product__sizes}>
      <p className={classes.left}>
        size
        {" "}
        <button type="button" className={classes.btn_more}>
          size guide
        </button>
      </p>

      <div className={classes.right}>
        {productSizes?.map(s => (
          <button
            key={s.size}
            type="button"
            className={`${s.size === size && "active-size"}`}
            disabled={!s.isAvailable}
            onClick={() => setSize(s.size)}
          >
            {s.size}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductSizes;
