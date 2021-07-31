import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { fadeInUp, stagger } from '../../utils/animations';
import classes from './SpiltContentTextContainer.module.scss';

const SplitContentText = dynamic(() =>
  import('../../components/SplitContentText/SplitContentText')
);
const SplitContentIcons = dynamic(() =>
  import('../../components/SplitContentIcons/SplitContentIcons')
);
const MyLink = dynamic(() => import('../../components/MyLink/MyLink'));

const SplitContentTextContainer = ({
  title,
  text,
  isTextFirst,
  route,
  variants,
}) => {
  return (
    <motion.div variants={variants} className={classes.split__content_text}>
      <motion.div variants={stagger}>
        <SplitContentText title={title} text={text} />

        <motion.div variants={fadeInUp}>
          <MyLink route={route}>load more</MyLink>
        </motion.div>

        <SplitContentIcons isTextFirst={isTextFirst} />
      </motion.div>
    </motion.div>
  );
};

export default SplitContentTextContainer;
