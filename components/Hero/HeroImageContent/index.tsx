import classes from "../HeroImage/HeroImage.module.scss";
import HeroSubtitle from "../HeroSubtitle/HeroSubtitle";
import HeroTitle from "../HeroTitle/HeroTitle";

import { Button } from "../../../components";

const HeroImageContent = ({ title, subtitle, color, route }) => {
  return (
    <div className={classes.hero__content}>
      <HeroSubtitle subtitle={subtitle} color={color} />

      <HeroTitle title={title} color={color} />

      <Button route={route} color={color}>
        shop now
      </Button>
    </div>
  );
};

export default HeroImageContent;
