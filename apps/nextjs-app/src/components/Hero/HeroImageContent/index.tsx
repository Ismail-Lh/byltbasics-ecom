import Button from "../../Button/Button";
import classes from "../HeroImage/HeroImage.module.scss";
import HeroSubtitle from "../HeroSubtitle/HeroSubtitle";
import HeroTitle from "../HeroTitle/HeroTitle";

type HeroImageContentProps = {
  title: string;
  subtitle: string;
  color: string;
  route: string;
};

/**
 * Renders the content of the hero image.
 *
 * @param {object} props - The component props.
 * @param {string} props.title - The title of the hero image.
 * @param {string} props.subtitle - The subtitle of the hero image.
 * @param {string} props.color - The color of the hero image.
 * @param {string} props.route - The route for the button.
 * @returns {JSX.Element} The rendered component.
 */
function HeroImageContent({
  title,
  subtitle,
  color,
  route,
}: HeroImageContentProps): JSX.Element {
  return (
    <div className={classes.hero__content}>
      <HeroSubtitle subtitle={subtitle} color={color} />

      <HeroTitle title={title} color={color} />

      <Button route={route} color={color}>
        shop now
      </Button>
    </div>
  );
}

export default HeroImageContent;
