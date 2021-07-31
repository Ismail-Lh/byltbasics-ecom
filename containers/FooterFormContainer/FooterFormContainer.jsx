import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { heroImageAnimation, stagger } from '../../utils/animations';

import classes from './FooterFormContainer.module.scss';

const FooterFormText = dynamic(() =>
  import('../../components/FooterFormText/FooterFormText')
);
const FooterFormInput = dynamic(() =>
  import('../../components/FooterFormInput/FooterFormInput')
);

const FooterFormContainer = () => {
  return (
    <motion.div variants={heroImageAnimation}>
      <motion.div variants={stagger} className={classes.footer__form}>
        <FooterFormText />
        <FooterFormInput />
      </motion.div>
    </motion.div>
  );
};

export default FooterFormContainer;
