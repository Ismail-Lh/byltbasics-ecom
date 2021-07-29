import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

import { Layout } from '../components';

const HomePageContainer = dynamic(() =>
  import('../containers/HomePageContainer/HomePageContainer')
);

export default function Home() {
  return (
    <Layout>
      <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
        <HomePageContainer />
      </motion.div>
    </Layout>
  );
}
