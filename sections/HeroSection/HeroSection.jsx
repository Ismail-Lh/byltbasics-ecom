import React, { useState, useEffect, useRef } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import classes from './HeroSection.module.scss';
import { HeroData } from '../../utils/constants';
import { HeroImage } from '../../components';
import { ArrowLeftIcon, ArrowRightIcon } from '../../Icons';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pause, setPause] = useState(false);
  const timer = useRef();
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
    loop: true,
    duration: 1000,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
  });

  useEffect(() => {
    sliderRef.current.addEventListener('mouseover', () => {
      setPause(true);
    });
    sliderRef.current.addEventListener('mouseout', () => {
      setPause(false);
    });
  }, [sliderRef]);

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 3000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);

  return (
    <div className={classes.hero__section}>
      <div ref={sliderRef} className='keen-slider'>
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
            <div className='keen-slider__slide hero__slide' key={id}>
              <HeroImage
                key={id}
                title={title}
                subtitle={subtitle}
                imgUrlDesktop={imgUrlDesktop}
                imgUrlMobile={imgUrlMobile}
                position={position}
                color={color}
                route={route}
              />
            </div>
          )
        )}
      </div>
      {slider && (
        <div className='arrows'>
          <ArrowLeftIcon
            onClick={e => e.stopPropagation() || slider.prev()}
            disabled={currentSlide === 0}
          />
          <ArrowRightIcon
            onClick={e => e.stopPropagation() || slider.next()}
            disabled={currentSlide === slider.details().size - 1}
          />
        </div>
      )}
    </div>
  );
};

export default HeroSection;
