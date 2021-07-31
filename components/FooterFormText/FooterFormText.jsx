import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';
import classes from './FooterFormText.module.scss';

const FooterFormText = () => {
  return (
    <motion.div variants={fadeInUp} className={classes.footer__form_text}>
      <h2>save up to</h2>
      <h1>20% off</h1>
    </motion.div>
  );
};

export default FooterFormText;
