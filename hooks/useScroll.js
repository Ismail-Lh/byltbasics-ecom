import { useCallback, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

function useScroll() {
  const ref = useRef();
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
  });

  // Use `useCallback` so we don't recreate the function on each render - Could result in infinite loop
  const setRefs = useCallback(
    node => {
      // Ref's from useRef needs to have the node assigned to `current`
      ref.current = node;
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node);
    },
    [inViewRef]
  );

  return { setRefs, inView };
}

export default useScroll;
