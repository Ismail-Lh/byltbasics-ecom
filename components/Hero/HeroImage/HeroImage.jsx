import { Wrapper } from './HeroImageStyles';

import HeroTitle from '../HeroTitle/HeroTitle';
import HeroSubtitle from '../HeroSubtitle/HeroSubtitle';

import { Button } from '../../../components';

const HeroImage = ({
  title,
  subtitle,
  imgUrlDesktop,
  imgUrlMobile,
  position,
  color,
  route,
}) => {
  const positionStyle = p => {
    let CLASS_NAME;

    if (p === 'right') CLASS_NAME = 'hero__content hero__content-right';

    if (p === 'left') CLASS_NAME = 'hero__content hero__content-left';

    if (p === 'center') CLASS_NAME = 'hero__content hero__content-center';

    return CLASS_NAME;
  };

  // const { observe, inView } = useScroll();

  return (
    <Wrapper
      imgUrlDesktop={imgUrlDesktop}
      imgUrlMobile={imgUrlMobile}
      className='hero__slide'>
      <div className={positionStyle(position)}>
        <HeroSubtitle subtitle={subtitle} color={color} />

        <HeroTitle title={title} color={color} />

        <Button route={route} color={color}>
          shop now
        </Button>
      </div>
    </Wrapper>
  );
};

export default HeroImage;
