import { useState } from 'react';
import Image from 'next/image';
import { useMediaQuery } from '@react-hook/media-query';

import classes from './SingleProductImages.module.scss';
import { motion } from 'framer-motion';

const SingleProductImages = ({ product, color }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const matchesMedia = useMediaQuery('only screen and (max-width: 768px)');

  const Images = ({ handelClick }) => {
    return (
      <>
        {product?.images?.map((img, idx) => (
          <div
            key={idx}
            onClick={() => handelClick && handelClick(idx)}
            className={classes.imgContainer}>
            <Image
              src={`/assets/products/${product?.gender}/${product?.collections}/${product?.style}/${product?.name}/${color}/large/${img}`}
              alt={`${product?.name}-${color}-${idx}`}
              layout='fill'
            />
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      {!matchesMedia ? (
        <div className={classes.singleProductImages_desktop}>
          <Images />
        </div>
      ) : (
        <div className={classes.singleProductImages_mobile}>
          <div className={classes.big_image}>
            <Image
              src={`/assets/products/${product?.gender}/${product?.collections}/${product?.style}/${product?.name}/${color}/large/${product?.images[imageIndex]}`}
              alt={`${product?.name}-${color}-${imageIndex}`}
              layout='fill'
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
