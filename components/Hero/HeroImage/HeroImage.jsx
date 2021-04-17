import classes from './HeroImage.module.scss';

import HeroTitle from '../HeroTitle/HeroTitle';
import HeroSubtitle from '../HeroSubtitle/HeroSubtitle';

import { Button } from '../../../components';

const HeroImage = ({ title, subtitle, imgUrl, position, color, route }) => {
  const backgroundImage = {
    backgroundImage: `url(${imgUrl})`,
  };

  const positionStyle = p => {
    let styles;

    if (p === 'right') {
      styles = {
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: '8rem',
      };
    }

    if (p === 'left') {
      styles = {
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: '8rem',
      };
    }

    if (p === 'center') {
      styles = {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      };
    }

    return styles;
  };

  return (
    <div className={classes.hero__image} style={backgroundImage}>
      <div className={classes.hero__content} style={positionStyle(position)}>
        <HeroSubtitle subtitle={subtitle} color={color} />

        <HeroTitle title={title} color={color} />

        <Button route={route} color={color}>
          shop now
        </Button>
      </div>
    </div>
  );
};

export default HeroImage;
