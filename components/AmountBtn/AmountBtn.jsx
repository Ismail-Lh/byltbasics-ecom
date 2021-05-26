import { useEffect, useState } from 'react';
import { useCartContext } from '../../contexts/cart_context';

const AmountBtn = ({ stock, productAmount, setAmount, productColor }) => {
  // const { getProductAmount } = useCartContext();
  // const [amount, setAmount] = useState(productAmount);

  useEffect(() => {
    setAmount(1);
  }, [productColor]);

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

  // useEffect(() => {
  //   getProductAmount(amount);
  // }, [amount]);

  return (
    <div>
      <button onClick={dec}> - </button>
      <span> {productAmount} </span>
      <button onClick={inc}> + </button>
    </div>
  );
};

export default AmountBtn;
