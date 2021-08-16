import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('../../components/Layout/Layout'));

const PageTransition = dynamic(() =>
  import('../../components/PageTransition/PageTransition')
);

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
