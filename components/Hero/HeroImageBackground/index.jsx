import { useMediaQuery } from "@react-hook/media-query";
import Image from "next/image";

import classes from '../HeroImage/HeroImage.module.scss';

const HeroImageBackground = ({ imgUrlDesktop, imgUrlMobile, title }) => {
  const matchesMedia = useMediaQuery('only screen and (max-width: 500px)');

  const imgSrc = !matchesMedia ? imgUrlDesktop : imgUrlMobile;
  
  return (
      <div
        className={classes.hero__img}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          zIndex: '-1',
        }}>
        <Image
          src={imgSrc}
          alt={title}
          layout='fill'
          priority={true}
          quality={100}
        />
      </div>
  )
}

export default HeroImageBackground;
