import classes from './SplitContentIcons.module.scss';

import {
  AthleticIcon,
  ShrinkIcon,
  WrinkleIcon,
  FriendsIcon,
  MoneyIcon,
} from '../../Icons';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '../../utils/animations';

const SplitContentIcons = ({ isTextFirst }) => {
  return (
    <motion.div variants={stagger} className={classes.split__content_icons}>
      {isTextFirst ? (
        <>
          <motion.div
            variants={fadeInUp}
            className={classes.split__content_icon_1}>
            <WrinkleIcon />
            <span>wrinkle free</span>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className={classes.split__content_icon_1}>
            <ShrinkIcon />
            <span>no shrink</span>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className={classes.split__content_icon_1}>
            <AthleticIcon />
            <span>athletic fit</span>
          </motion.div>
        </>
      ) : (
        <motion.div
          variants={fadeInUp}
          className={classes.split__content_icon_2}>
          <FriendsIcon />
          <p> =</p>
          <MoneyIcon />
        </motion.div>
      )}
    </motion.div>
  );
};

export default SplitContentIcons;
