import classes from "./ProductQuantity.module.scss";

import { decAmount, incAmount } from "../../utils/helpers";
import AmountBtn from "../AmountBtn/AmountBtn";

type ProductQuantityProps = {
  stock: number;
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
};

/**
 * Renders the product quantity component.
 *
 * @param {Object} props - The component props.
 * @param {number} props.stock - The available stock of the product.
 * @param {number} props.amount - The current quantity of the product.
 * @param {Function} props.setAmount - The function to update the quantity of the product.
 * @returns {JSX.Element} The rendered product quantity component.
 */
function ProductQuantity({
  stock,
  amount,
  setAmount,
}: ProductQuantityProps): JSX.Element {
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
}

export default ProductQuantity;
