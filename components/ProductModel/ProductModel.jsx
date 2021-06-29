import classes from './ProductModel.module.scss';
import { SingleProductContainer } from '../../containers';
import { CloseIcon } from '../../Icons';

const ProductModel = ({ openProductModel, setOpenProductModel }) => {
  return (
    <div
      className={`${
        !openProductModel ? 'productModel' : 'productModel productModel__show'
      }`}>
      <div className={classes.productModel__content}>
        <div className={classes.closeBtn}>
          <button onClick={() => setOpenProductModel(false)}>
            <CloseIcon />
          </button>
        </div>

        <SingleProductContainer />
      </div>
    </div>
  );
};

export default ProductModel;
