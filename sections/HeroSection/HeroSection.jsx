import dynamic from 'next/dynamic';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import classes from './HeroSection.module.scss';
import { HeroData } from '../../utils/constants';

const HeroImage = dynamic(() =>
  import('../../components/Hero/HeroImage/HeroImage')
);

const HeroSection = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={classes.hero__section}>
      <Carousel
        ssr={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}>
        {HeroData.map(
          ({
            id,
            title,
            subtitle,
            imgUrlDesktop,
            imgUrlMobile,
            color,
            route,
            position,
          }) => (
            <HeroImage
              key={id}
              title={title}
              subtitle={subtitle}
              imgUrlDesktop={imgUrlDesktop}
              imgUrlMobile={imgUrlMobile}
              position={position}
              color={color}
              route={route}
              priority={true}
            />
          )
        )}
      </Carousel>
    </div>
  );
};

export default HeroSection;
