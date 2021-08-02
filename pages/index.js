import dynamic from 'next/dynamic';

// COMPONENTS
import { Layout } from '../components';

const HomePageContainer = dynamic(() =>
  import('../containers/HomePageContainer/HomePageContainer')
);

export default function Home() {
  return (
    <Layout>
      <HomePageContainer />
    </Layout>
  );
}
