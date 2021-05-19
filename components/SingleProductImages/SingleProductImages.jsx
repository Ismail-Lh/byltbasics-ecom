import { useState } from 'react';

import classes from './SingleProductImages.module.scss';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const SingleProductImages = ({
  images,
  name,
  color,
  category,
  type,
  gender,
}) => {
  const { width } = useWindowDimensions();

  const [imageIndex, setImageIndex] = useState(0);

  return (
    <>
      {width <= 768 ? (
        <div className={classes.singleProductImages_mobile}>
          <div className={classes.big_image}>
            <img
              src={`/assets/products/${gender}/${category}/${type}/${name}/${color}/large/${images[imageIndex]}`}
              alt={`${name}-${color}-${imageIndex}`}
            />
          </div>

          <div className={classes.small_images}>
            {images?.map((img, idx) => (
              <div key={idx} onClick={() => setImageIndex(idx)}>
                <img
                  src={`/assets/products/${gender}/${category}/${type}/${name}/${color}/large/${img}`}
                  alt={`${name}-${color}`}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={classes.singleProductImages_desktop}>
          {images?.map((img, idx) => (
            <div key={idx}>
              <img
                src={`/assets/products/${gender}/${category}/${type}/${name}/${color}/large/${img}`}
                alt={`${name}-${color}`}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SingleProductImages;
