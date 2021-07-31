import { motion } from 'framer-motion';
import { fadeInUp } from '../../../utils/animations';
import classes from './HeroTitle.module.scss';

const HeroTitle = ({ title, color }) => {
  return (
    <motion.h1
      variants={fadeInUp}
      className={classes.hero__title}
      style={{ color: color }}>
      {title}
    </motion.h1>
  );
};

export default HeroTitle;
