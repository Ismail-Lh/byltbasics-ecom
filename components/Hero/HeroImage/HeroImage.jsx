import { Wrapper } from './HeroImageStyles';

import HeroTitle from '../HeroTitle/HeroTitle';
import HeroSubtitle from '../HeroSubtitle/HeroSubtitle';

import { Button } from '../../../components';
import { motion } from 'framer-motion';
import {
  fadeInUp,
  heroImageAnimation,
  stagger,
} from '../../../utils/animations';
import useScroll from '../../../hooks/useScroll';

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

  const [element, controls] = useScroll();

  return (
    <motion.div variants={stagger} ref={element}>
      <motion.div variants={heroImageAnimation} animate={controls}>
        <Wrapper
          imgUrlDesktop={imgUrlDesktop}
          imgUrlMobile={imgUrlMobile}
          className='hero__slide'>
          <div className={positionStyle(position)}>
            <HeroSubtitle subtitle={subtitle} color={color} />

            <HeroTitle title={title} color={color} />

            <motion.div variants={fadeInUp}>
              <Button route={route} color={color}>
                shop now
              </Button>
            </motion.div>
          </div>
        </Wrapper>
      </motion.div>
    </motion.div>
  );
};

export default HeroImage;
