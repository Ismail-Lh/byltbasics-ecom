import Image from "next/image";
import { useEffect, useState } from "react";
import { useFiltersContext } from "../../contexts/filters_context";
import classes from "./BackgroundImage.module.scss";

type BackgroundImageProps = {
  srcImg?: string;
  titleBg?: string;
};

/**
 * Renders a background image component with a title.
 *
 * @param {BackgroundImageProps} props - The component props.
 * @param {string} props.srcImg - The source image URL.
 * @param {string} props.titleBg - The background title.
 * @returns {JSX.Element} The rendered background image component.
 */

function BackgroundImage({
  srcImg,
  titleBg,
}: BackgroundImageProps): JSX.Element {
  const { collection } = useFiltersContext();

  const [imgSrc, setImgSrc] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    setImgSrc(collection.route);
    setTitle(collection.title);
  }, [collection]);

  return (
    <div
      className={classes.backgroundImage}
      style={{ position: "relative", width: "100%" }}
    >
      <Image
        src={`/assets/${imgSrc || srcImg}.jpg`}
        alt={title}
        width={1440}
        height={350}
        layout="responsive"
        quality={100}
      />
      <h1 className={classes.backgroundImage__title}>{title || titleBg}</h1>
    </div>
  );
}

export default BackgroundImage;
