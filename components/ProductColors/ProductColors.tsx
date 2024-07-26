import classes from "./ProductColors.module.scss";

const ProductColors = ({ productColors, color, setColor }) => {
  return (
    <div className={classes.productColors}>
      <p>
        Color : <span>{color}</span>
      </p>
      <div className={classes.colors}>
        {productColors?.map((color) => (
          <div
            key={color}
            onClick={() => setColor(color)}
            className={classes.imgContainer}
          >
            <img
              src={`/assets/products/colors/${color}.jpg`}
              alt={clr}
              className={`${clr === color && "active-color"}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductColors;
