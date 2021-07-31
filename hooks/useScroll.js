import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const useScroll = (thresh = 0.4) => {
  const controls = useAnimation();

  const [element, view] = useInView({ threshold: thresh });

  if (view) {
    controls.start('animate');
  } else {
    controls.start('initial');
  }

  return [element, controls];
};

export default useScroll;
