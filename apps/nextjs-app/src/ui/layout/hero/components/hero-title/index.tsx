import styles from "./styles.module.scss";

interface HeroTitleProps {
  title: string;
  color: string;
}

/**
 * Renders the title for the hero component.
 *
 * @param {object} props - The component props.
 * @param {string} props.title - The title text to display.
 * @param {string} props.color - The color of the title text.
 *
 */
export function HeroTitle({ title, color }: HeroTitleProps) {
  return (
    <h1 className={styles.hero__title} style={{ color }}>
      {title}
    </h1>
  );
}
