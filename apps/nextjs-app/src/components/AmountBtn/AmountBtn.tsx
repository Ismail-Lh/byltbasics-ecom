import classes from "./AmountBtn.module.scss";

type AmountBtnProps = {
  incAmount: () => void;
  decAmount: () => void;
  productAmount: number;
};

function AmountBtn({ incAmount, decAmount, productAmount }: AmountBtnProps) {
  return (
    <div className={classes.amountBtn}>
      <button type="button" onClick={decAmount}>
        -
      </button>
      <span>
        {" "}
        {productAmount}
        {" "}
      </span>
      <button type="button" onClick={incAmount}>
        +
      </button>
    </div>
  );
}

export default AmountBtn;
