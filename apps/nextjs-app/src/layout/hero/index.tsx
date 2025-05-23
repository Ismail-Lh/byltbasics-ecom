"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { HeroImage } from "./components";
import { HeroData } from "./constants";
import styles from "./styles.module.scss";

/**
 * Renders the HeroSection component.
 *
 * @returns The rendered HeroSection component.
 */
export function HeroSection() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={styles.hero__section}>
      <Carousel
        ssr={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
      >
        {HeroData.map(
          ({
            id,
            title,
            subtitle,
            imgUrlDesktop,
            imgUrlMobile,
            color,
            route,
          }) => (
            <HeroImage
              key={id}
              title={title}
              subtitle={subtitle}
              imgUrlDesktop={imgUrlDesktop}
              imgUrlMobile={imgUrlMobile}
              color={color}
              route={route}
            />
          ),
        )}
      </Carousel>
    </div>
  );
}
