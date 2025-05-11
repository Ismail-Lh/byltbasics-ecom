import classes from "./HeroSubtitle.module.scss";

type HeroSubtitleProps = {
  subtitle: string;
  color: string;
};

/**
 * Renders the subtitle for the hero component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.subtitle - The subtitle text.
 * @param {string} props.color - The color of the subtitle.
 * @returns {JSX.Element} The rendered subtitle component.
 */
function HeroSubtitle({ subtitle, color }: HeroSubtitleProps): JSX.Element {
  return (
    <h2 className={classes.hero__subtitle} style={{ color: color }}>
      {subtitle}
    </h2>
  );
}

export default HeroSubtitle;
