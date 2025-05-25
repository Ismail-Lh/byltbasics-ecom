import { HeroBackgroundImage } from "../hero-background-image";
import { HeroImageContent } from "../hero-image-content";
import styles from "./styles.module.scss";

interface HeroImageProps {
  title: string;
  subtitle: string;
  imgUrlDesktop: string;
  imgUrlMobile: string;
  color: string;
  route: string;
}

/**
 * Renders a hero image component with a background image and content.
 *
 * @param {object} props - The component props.
 * @param {string} props.title - The title of the hero image.
 * @param {string} props.subtitle - The subtitle of the hero image.
 * @param {string} props.imgUrlDesktop - The URL of the desktop background image.
 * @param {string} props.imgUrlMobile - The URL of the mobile background image.
 * @param {string} props.color - The color of the hero image content.
 * @param {string} props.route - The route to navigate to when the hero image is clicked.
 * @returns The rendered hero image component.
 */
export function HeroImage({
  title,
  subtitle,
  imgUrlDesktop,
  imgUrlMobile,
  color,
  route,
}: HeroImageProps) {
  return (
    <div className={styles.hero__container}>
      <HeroBackgroundImage
        imgUrlDesktop={imgUrlDesktop}
        imgUrlMobile={imgUrlMobile}
        title={title}
      />
      <HeroImageContent
        title={title}
        subtitle={subtitle}
        color={color}
        route={route}
      />
    </div>
  );
}
