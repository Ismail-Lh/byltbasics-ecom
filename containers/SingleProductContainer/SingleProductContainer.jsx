import { useEffect, useState } from 'react';
import classes from './SingleProductContainer.module.scss';

import { SingleProductImages, SingleProductInfo } from '../../components';
import { useProductsContext } from '../../contexts/products_context';
import { getProductColor } from '../../utils/helpers';

const SingleProductContainer = () => {
  const { single_product: product } = useProductsContext();

  const { color, setColor } = getProductColor(
    'productColor',
    product?.colors[0]
  );

  return (
    <div className={classes.singleProduct}>
      <div className='container'>
        <div className={classes.singleProduct_container}>
          <SingleProductImages product={product} color={color} />
          <SingleProductInfo
            {...product}
            color={color}
            changeColor={setColor}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleProductContainer;
