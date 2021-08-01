import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// COMPONENTS
import { Layout } from '../components';

const HomePageContainer = dynamic(() =>
  import('../containers/HomePageContainer/HomePageContainer')
);
// UTILS
import { leftToRight, pageAnimation, rightToLeft } from '../utils/animations';

export default function Home() {
  return (
    <Layout>
      <HomePageContainer />
    </Layout>
  );
}
