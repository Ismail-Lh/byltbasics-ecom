import classes from './ProductColors.module.scss';

const ProductColors = ({ product, color, setColor }) => {
  return (
    <div className={classes.productColors}>
      <p>
        Color : <span>{color}</span>
      </p>
      <div className={classes.colors}>
        {product?.colors?.map((clr, idx) => (
          <div
            key={idx}
            onClick={() => setColor(clr)}
            className={classes.imgContainer}>
            <img
              src={`/assets/products/colors/${clr}.jpg`}
              alt={clr}
              className={`${clr === color && 'active-color'}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductColors;
