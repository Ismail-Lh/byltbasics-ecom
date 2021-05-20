import { useEffect, useState } from 'react';

export const formatPrice = (price, discountPer) => {
  let finalPrice;

  if (!discountPer) finalPrice = price;
  else {
    finalPrice = price - (price * discountPer) / 100;
  }

  const newPrice = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(finalPrice / 100);

  return newPrice;
};

export const getLocalStorage = (key, value) => {
  if (typeof window !== 'undefined') {
    let storage = localStorage?.getItem(key);

    if (key === 'singleProduct') {
      return storage ? JSON.parse(storage) : {};
    }

    if (key === 'productColor') {
      return storage ? JSON.parse(storage) : value;
    }
  }
};

export const setLocalStorage = (key, value) => {
  if (typeof window !== 'undefined') {
    localStorage?.setItem(key, JSON.stringify(value));
  }
};

export const getProductColor = (key, value) => {
  const [color, setColor] = useState(getLocalStorage(key, value));

  useEffect(() => {
    setLocalStorage(key, color);
  }, [color]);

  return { color, setColor };
};
