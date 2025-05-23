import { Button } from "@/components/global";

import { HeroSubtitle } from "../hero-subtitle";
import { HeroTitle } from "../hero-title";
import styles from "./styles.module.scss";

interface HeroImageContentProps {
  title: string;
  subtitle: string;
  color: string;
  route: string;
}

/**
 * Renders the content of the hero image.
 *
 * @param {object} props - The component props.
 * @param {string} props.title - The title of the hero image.
 * @param {string} props.subtitle - The subtitle of the hero image.
 * @param {string} props.color - The color of the hero image.
 * @param {string} props.route - The route for the button.
 */
export function HeroImageContent({
  title,
  subtitle,
  color,
  route,
}: HeroImageContentProps) {
  return (
    <div className={styles.hero__content}>
      <HeroSubtitle subtitle={subtitle} color={color} />

      <HeroTitle title={title} color={color} />

      <Button route={route} color={color}>
        shop now
      </Button>
    </div>
  );
}
