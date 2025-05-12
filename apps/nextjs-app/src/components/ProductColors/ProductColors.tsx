import classes from "./ProductColors.module.scss";

type ProductColorsProps = {
  productColors: string[];
  color: string;
  setColor: (color: string) => void;
};

/**
 * Renders a component that displays the available product colors and allows the user to select a color.
 *
 * @param {object} props - The component props.
 * @param {string[]} props.productColors - An array of available product colors.
 * @param {string} props.color - The currently selected color.
 * @param {Function} props.setColor - A function to set the selected color.
 * @returns {JSX.Element} The rendered component.
 */
function ProductColors({
  productColors,
  color,
  setColor,
}: ProductColorsProps): JSX.Element {
  return (
    <div className={classes.productColors}>
      <p>
        Color :
        {" "}
        <span>{color}</span>
      </p>
      <div className={classes.colors}>
        {productColors?.map(clr => (
          <div
            key={clr}
            onClick={() => setColor(clr)}
            className={classes.imgContainer}
          >
            <img
              src={`/assets/products/colors/${clr}.jpg`}
              alt={clr}
              className={`${clr === color && "active-color"}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductColors;
