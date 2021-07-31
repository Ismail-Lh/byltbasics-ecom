import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import useScroll from '../../hooks/useScroll';
import { stagger } from '../../utils/animations';

const FooterFormContainer = dynamic(() =>
  import('../../containers/FooterFormContainer/FooterFormContainer')
);
const FooterLinksContainer = dynamic(() =>
  import('../../containers/FooterLinksContainer/FooterLinksContainer')
);

const FooterSection = () => {
  const [element, controls] = useScroll();
  return (
    <motion.div ref={element}>
      <motion.div variants={stagger} animate={controls} className='container'>
        <FooterFormContainer />

        <FooterLinksContainer />
      </motion.div>
    </motion.div>
  );
};

export default FooterSection;
