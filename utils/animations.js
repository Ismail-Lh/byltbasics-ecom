export const easing = [0.6, -0.05, 0.01, 0.99];

const transition = { duration: 0.6, ease: easing };

export const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition,
  },
};

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};
