import classes from './ProductSale.module.scss';

const ProductSale = ({ product }) => {
  return (
    <>
      {product?.discountPer && (
        <p className={classes.productSale}>sale {product?.discountPer}% off</p>
      )}
    </>
  );
};

export default ProductSale;
