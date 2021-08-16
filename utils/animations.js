export const easing = [0.6, -0.05, 0.01, 0.99];

export const pageAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.25,
      ease: easing,
      when: 'beforeChildren',
    },
  },
};

export const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: easing },
  },
};

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

export const heroImageAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      type: 'spring',
      delay: 0.2,
      duration: 0.3,
      ease: easing,
      when: 'beforeChildren',
    },
  },
};

export const leftToRight = {
  initial: { opacity: 0, x: '-100vw' },
  animate: { opacity: 1, x: 0, transition: { duration: 0.25 } },
};

export const rightToLeft = {
  initial: { opacity: 0, x: '100vw' },
  animate: { opacity: 1, x: 0, transition: { delay: 0.4, duration: 0.25 } },
};

export const cartVariants = {
  closed: { opacity: 0, x: '100%' },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 30,
      ease: easing,
    },
  },
};

export const menuVariants = {
  closed: { opacity: 0, x: '-100%' },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 30,
      ease: easing,
    },
  },
};
