import classes from "./HeroTitle.module.scss";

type HeroTitleProps = {
  title: string;
  color: string;
};

/**
 * Renders the title for the hero component.
 *
 * @param {string} title - The title to be displayed.
 * @param {string} color - The color of the title.
 * @returns {JSX.Element} - The rendered title component.
 */
function HeroTitle({ title, color }: HeroTitleProps): JSX.Element {
  return (
    <h1 className={classes.hero__title} style={{ color }}>
      {title}
    </h1>
  );
}

export default HeroTitle;
