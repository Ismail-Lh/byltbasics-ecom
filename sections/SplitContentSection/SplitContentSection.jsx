import { motion } from 'framer-motion';
import useScroll from '../../hooks/useScroll';
import { heroImageAnimation, stagger } from '../../utils/animations';
import { Wrapper } from './SplitContentSectionStyles';

const SplitContentSection = ({ isTextFirst, children, order }) => {
  const [element, controls] = useScroll();
  return (
    <motion.div variants={stagger} ref={element}>
      <Wrapper
        variants={heroImageAnimation}
        animate={controls}
        isTextFirst={isTextFirst}
        order={order}>
        {children}
      </Wrapper>
    </motion.div>
  );
};

export default SplitContentSection;
