import classes from "./ProductQuantity.module.scss";

import { AmountBtn } from "..";
import { decAmount, incAmount } from "../../utils/helpers";

const ProductQuantity = ({ stock, amount, setAmount }) => {
  return (
    <div className={classes.product__qty}>
      <p>quantity</p>

      <AmountBtn
        incAmount={() => incAmount(setAmount, stock)}
        decAmount={() => decAmount(setAmount)}
        productAmount={amount}
      />
    </div>
  );
};

export default ProductQuantity;
