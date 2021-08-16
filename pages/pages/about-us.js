import dynamic from 'next/dynamic';

import { PageTransition } from '../../components';

const Layout = dynamic(() => import('../../components/Layout/Layout'));

const AboutUsPageContainer = dynamic(() =>
  import('../../containers/AboutUsPageContainer/AboutUsPageContainer')
);

const AboutUsPage = () => {
  return (
    <Layout title='Our Story | BYLT Premium'>
      <PageTransition>
        <AboutUsPageContainer />
      </PageTransition>
    </Layout>
  );
};

export default AboutUsPage;
