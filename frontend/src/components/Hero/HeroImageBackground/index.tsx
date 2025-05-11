import { useMediaQuery } from "@react-hook/media-query";
import Image from "next/image";

import classes from "../HeroImage/HeroImage.module.scss";

type HeroImageBackgroundProps = {
  imgUrlDesktop: string;
  imgUrlMobile: string;
  title: string;
};

/**
 * Renders a hero image background component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.imgUrlDesktop - The URL of the desktop image.
 * @param {string} props.imgUrlMobile - The URL of the mobile image.
 * @param {string} props.title - The title of the hero image.
 * @returns {JSX.Element} The rendered HeroImageBackground component.
 */
function HeroImageBackground({
  imgUrlDesktop,
  imgUrlMobile,
  title,
}: HeroImageBackgroundProps): JSX.Element {
  const matchesMedia = useMediaQuery("only screen and (max-width: 500px)");

  const imgSrc = !matchesMedia ? imgUrlDesktop : imgUrlMobile;

  return (
    <div
      className={classes.hero__img}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        zIndex: "-1",
      }}
    >
      <Image src={imgSrc} alt={title} layout="fill" quality={100} />
    </div>
  );
}

export default HeroImageBackground;
