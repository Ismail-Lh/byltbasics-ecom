import { motion } from 'framer-motion';
import { pageAnimation } from '../../utils/animations';

const PageTransition = ({ children }) => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='initial'
      animate='animate'
      exit='initial'>
      {children}
    </motion.div>
  );
};

export default PageTransition;
