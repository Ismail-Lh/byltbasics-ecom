import classes from "./AmountBtn.module.scss";

const AmountBtn = ({ incAmount, decAmount, productAmount }) => {
  return (
    <div className={classes.amountBtn}>
      <button type="button" onClick={decAmount}>
        -
      </button>
      <span> {productAmount} </span>
      <button type="button" onClick={incAmount}>
        +
      </button>
    </div>
  );
};

export default AmountBtn;
