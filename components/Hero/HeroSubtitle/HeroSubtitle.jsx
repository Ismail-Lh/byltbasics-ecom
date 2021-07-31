import { motion } from 'framer-motion';
import { fadeInUp } from '../../../utils/animations';
import classes from './HeroSubtitle.module.scss';

const HeroSubtitle = ({ subtitle, color }) => {
  return (
    <motion.h2
      variants={fadeInUp}
      className={classes.hero__subtitle}
      style={{ color: color }}>
      {subtitle}
    </motion.h2>
  );
};

export default HeroSubtitle;
