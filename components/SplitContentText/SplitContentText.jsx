import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '../../utils/animations';
import classes from './SplitContentText.module.scss';

const SplitContentText = ({ title, text }) => {
  return (
    <motion.div variants={stagger}>
      <motion.h2 variants={fadeInUp} className={classes.split__content_title}>
        {title}
      </motion.h2>
      <motion.p variants={fadeInUp} className={classes.split__content_text}>
        {text}
      </motion.p>
    </motion.div>
  );
};

export default SplitContentText;
