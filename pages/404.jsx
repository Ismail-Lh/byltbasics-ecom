import dynamic from 'next/dynamic';
import { PageTransition } from '../components';

const Layout = dynamic(() => import('../components/Layout/Layout'));

const PageNotFoundContainer = dynamic(() =>
  import('../containers/PageNotFoundContainer/PageNotFoundContainer')
);

const PageNotFound = () => {
  return (
    <Layout title='404 Not Found | BYLT Basics'>
      <PageTransition>
        <PageNotFoundContainer />
      </PageTransition>
    </Layout>
  );
};

export default PageNotFound;
