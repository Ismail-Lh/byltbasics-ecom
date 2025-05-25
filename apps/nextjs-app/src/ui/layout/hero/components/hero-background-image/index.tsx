import { useMediaQuery } from "@react-hook/media-query";
import Image from "next/image";

interface HeroImageBackgroundProps {
  imgUrlDesktop: string;
  imgUrlMobile: string;
  title: string;
}

/**
 * Renders a hero background image component.
 *
 * @param {object} props - The component props.
 * @param {string} props.imgUrlDesktop - The URL of the desktop image.
 * @param {string} props.imgUrlMobile - The URL of the mobile image.
 * @param {string} props.title - The title of the hero image.
 */
export function HeroBackgroundImage({
  imgUrlDesktop,
  imgUrlMobile,
  title,
}: HeroImageBackgroundProps) {
  const matchesMedia = useMediaQuery("only screen and (max-width: 500px)");

  const imgSrc = !matchesMedia ? imgUrlDesktop : imgUrlMobile;

  return (
    <div>
      <Image src={imgSrc} alt={title} layout="fill" quality={100} />
    </div>
  );
}
