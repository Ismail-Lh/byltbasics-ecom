import { useInView } from 'react-intersection-observer';

function useScroll() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return { ref, inView };
}

export default useScroll;
