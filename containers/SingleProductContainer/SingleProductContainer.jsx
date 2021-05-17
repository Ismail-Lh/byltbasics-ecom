import { useState } from 'react';
import classes from './SingleProductContainer.module.scss';

import { SingleProductImages, SingleProductInfo } from '../../components';
import { useProductsContext } from '../../contexts/products_context';

const SingleProductContainer = () => {
  const { single_product: productInfo, product_color: productColor } =
    useProductsContext();

  const [color, setColor] = useState(productColor);

  return (
    <div className={classes.singleProduct}>
      <div className='container'>
        <div className={classes.singleProduct_container}>
          <SingleProductImages {...productInfo} color={color} />
          <SingleProductInfo
            {...productInfo}
            color={color}
            changeColor={setColor}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleProductContainer;
