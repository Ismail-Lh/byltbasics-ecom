import classes from './ProductModal.module.scss';
import { CloseIcon } from '../../Icons';
import { SingleProductInfo } from '..';
import { useProductsContext } from '../../contexts/products_context';
import { useEffect, useState } from 'react';

const ProductModal = () => {
  const { isProductModalOpen, closeProductModal, single_product } =
    useProductsContext();

  const { productInfo: product, productColor } = single_product;

  const [color, setColor] = useState('');

  useEffect(() => {
    setColor(productColor);
  }, [productColor]);

  return (
    <div
      className={`${
        !isProductModalOpen ? 'productModal' : 'productModal productModal__show'
      }`}>
      <div className={classes.productModal__content}>
        <div className={classes.closeBtn}>
          <button onClick={closeProductModal}>
            <CloseIcon />
          </button>
        </div>

        <div className={classes.product}>
          <div className={classes.product__image}>
            <img
              src={`/assets/products/${product?.gender}/${product?.collections}/${product?.style}/${product?.name}/${color}/large/${product?.images[0]}`}
              alt={`${product?.name}-${color}`}
            />
          </div>

          <SingleProductInfo
            product={product}
            color={color}
            changeColor={setColor}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
