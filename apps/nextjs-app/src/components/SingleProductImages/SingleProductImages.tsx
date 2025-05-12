import { useMediaQuery } from "@react-hook/media-query";
import Image from "next/image";
import { useState } from "react";

import type { Product } from "../../types";

import classes from "./SingleProductImages.module.scss";

type SingleProductImagesProps = {
  product: Product;
  color: string;
};

type ImagesProps = {
  handelClick?: (idx: number) => void;
  wh: string;
};

/**
 * Renders the component for displaying the images of a single product.
 *
 * @param {SingleProductImagesProps} props - The component props.
 * @returns {JSX.Element} The rendered component.
 */
function SingleProductImages({
  product,
  color,
}: SingleProductImagesProps): JSX.Element {
  const [imageIndex, setImageIndex] = useState(0);

  const matchesMedia = useMediaQuery("only screen and (max-width: 768px)");

  const Images = ({ handelClick, wh }: ImagesProps) => {
    return (
      <>
        {product?.images?.map((img, idx) => (
          <div
            key={img}
            onClick={() => handelClick?.(idx)}
            style={{ position: "relative", width: `${wh}`, height: "100%" }}
          >
            <Image
              src={`/assets/products/${product?.gender}/${product?.collections}/${product?.style}/${product?.name}/${color}/large/${img}`}
              alt={`${product?.name}-${color}-${idx}`}
              layout="responsive"
              width={540}
              height={675}
            />
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      {!matchesMedia
        ? (
            <div className={classes.singleProductImages_desktop}>
              <Images wh="100%" />
            </div>
          )
        : (
            <div className={classes.singleProductImages_mobile}>
              <div className={classes.big_image}>
                <Image
                  src={`/assets/products/${product?.gender}/${product?.collections}/${product?.style}/${product?.name}/${color}/large/${product?.images[imageIndex]}`}
                  alt={`${product?.name}-${color}-${imageIndex}`}
                  layout="responsive"
                  width={540}
                  height={675}
                />
              </div>

              <div className={classes.small_images}>
                <Images handelClick={setImageIndex} wh="10rem" />
              </div>
            </div>
          )}
    </>
  );
}

export default SingleProductImages;
