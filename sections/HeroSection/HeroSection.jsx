import classes from './HeroSection.module.scss';

import { HeroImage } from '../../components';

import { HeroData } from '../../utils/constants';

const HeroSection = () => {
  return (
    <div className={classes.hero}>
      {HeroData.map(
        ({ title, subtitle, imgUrl, id, position, color, route }) => (
          <HeroImage
            key={id}
            title={title}
            subtitle={subtitle}
            imgUrl={imgUrl}
            position={position}
            color={color}
            route={route}
          />
        )
      )}
    </div>
  );
};

export default HeroSection;
