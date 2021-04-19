import HeroTitle from '../HeroTitle/HeroTitle';
import HeroSubtitle from '../HeroSubtitle/HeroSubtitle';

import { Button } from '../../../components';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

const HeroImage = ({
  title,
  subtitle,
  imgUrlDesktop,
  imgUrlMobile,
  position,
  color,
  route,
}) => {
  const { width } = useWindowDimensions();

  const backgroundImage = {
    backgroundImage: `${
      width >= 700 ? `url(${imgUrlDesktop})` : `url(${imgUrlMobile})`
    }`,
  };

  const positionStyle = p => {
    let CLASS_NAME;

    if (p === 'right') CLASS_NAME = 'hero__content-right';

    if (p === 'left') CLASS_NAME = 'hero__content-left';

    if (p === 'center') CLASS_NAME = 'hero__content-center';

    return CLASS_NAME;
  };

  return (
    <div className='hero__image' style={backgroundImage}>
      <div className={positionStyle(position)}>
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
