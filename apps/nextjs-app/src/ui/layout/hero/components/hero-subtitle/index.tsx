import styles from "./styles.module.scss";

interface HeroSubtitleProps {
  subtitle: string;
  color: string;
}

/**
 * Renders the subtitle for the hero component.
 *
 * @param {object} props - The component props.
 * @param {string} props.subtitle - The subtitle text.
 * @param {string} props.color - The color of the subtitle.
 */
export function HeroSubtitle({ subtitle, color }: HeroSubtitleProps) {
  return (
    <h2 className={styles.hero__subtitle} style={{ color }}>
      {subtitle}
    </h2>
  );
}
