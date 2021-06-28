import classes from './style.module.scss';

const ProductsCardColors = ({ product, color, setColor }) => {
  return (
    <div className={classes.card__info_colors}>
      <p>{color}</p>
      <div className={classes.colors}>
        {product?.colors?.map((clr, idx) => (
          <div key={idx} onClick={() => setColor(clr)}>
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

export default ProductsCardColors;
