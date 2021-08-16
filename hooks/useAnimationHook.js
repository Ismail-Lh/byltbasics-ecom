import { useAnimation } from 'framer-motion';

export const useAnimationHook = state => {
  console.log(state);

  const controls = useAnimation();

  if (state) {
    controls.start('open');
  } else {
    controls.start('closed');
  }

  return controls;
};
