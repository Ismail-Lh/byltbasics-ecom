const AmountBtn = ({ stock, amount, setAmount }) => {
  const inc = () => {
    setAmount(oldAmount => {
      let newAmount = oldAmount + 1;

      if (newAmount > stock) {
        newAmount = stock;
      }
      return newAmount;
    });
  };

  const dec = () => {
    setAmount(oldAmount => {
      let newAmount = oldAmount - 1;

      if (newAmount < 1) {
        newAmount = 1;
      }
      return newAmount;
    });
  };

  return (
    <div>
      <button onClick={dec}> - </button>
      <span> {amount} </span>
      <button onClick={inc}> + </button>
    </div>
  );
};

export default AmountBtn;
