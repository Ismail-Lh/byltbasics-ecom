import { useState } from 'react';
import classes from './SingleProductContainer.module.scss';

import { SingleProductImages, SingleProductInfo } from '../../components';
import { useProductsContext } from '../../contexts/products_context';

const SingleProductContainer = () => {
  const { single_product: product } = useProductsContext();

  const [color, setColor] = useState(product?.productColor);

  return (
    <div className={classes.singleProduct}>
      <div className='container'>
        <div className={classes.singleProduct_container}>
          <SingleProductImages product={product?.productInfo} color={color} />
          <SingleProductInfo
            product={product?.productInfo}
            color={color}
            changeColor={setColor}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleProductContainer;
