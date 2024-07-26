import HeroImageBackground from "../HeroImageBackground";
import HeroImageContent from "../HeroImageContent";
import classes from "./HeroImage.module.scss";

const HeroImage = ({
  title,
  subtitle,
  imgUrlDesktop,
  imgUrlMobile,
  color,
  route,
}) => {
  return (
    <div className={classes.hero__container}>
      <HeroImageBackground
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
};

export default HeroImage;
