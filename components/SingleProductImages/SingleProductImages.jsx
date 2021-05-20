import { useState } from 'react';

import classes from './SingleProductImages.module.scss';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const SingleProductImages = ({ product, color }) => {
  const { width } = useWindowDimensions();

  const [imageIndex, setImageIndex] = useState(0);

  const Images = ({ handelClick }) => {
    return (
      <>
        {product?.images?.map((img, idx) => (
          <div key={idx} onClick={() => handelClick && handelClick(idx)}>
            <img
              src={`/assets/products/${product?.gender}/${product?.category}/${product?.type}/${product?.name}/${color}/large/${img}`}
              alt={`${product?.name}-${color}-${idx}`}
            />
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      {width > 768 ? (
        <div className={classes.singleProductImages_desktop}>
          <Images />
        </div>
      ) : (
        <div className={classes.singleProductImages_mobile}>
          <div className={classes.big_image}>
            <img
              src={`/assets/products/${product?.gender}/${product?.category}/${product?.type}/${product?.name}/${color}/large/${product?.images[imageIndex]}`}
              alt={`${product?.name}-${color}-${imageIndex}`}
            />
          </div>

          <div className={classes.small_images}>
            <Images handelClick={setImageIndex} />
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProductImages;
