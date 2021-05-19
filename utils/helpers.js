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

export const getLocalStorage = key => {
  let storage = localStorage?.getItem(key);

  if (key === 'singleProduct') {
    return storage ? JSON.parse(storage) : {};
  }
};

export const setLocalStorage = (key, value) => {
  localStorage?.setItem(key, JSON.stringify(value));
};
