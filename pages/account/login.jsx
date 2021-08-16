import dynamic from 'next/dynamic';
import { PageTransition } from '../../components';

const Layout = dynamic(() => import('../../components/Layout/Layout'));

const LoginPageContainer = dynamic(() =>
  import('../../containers/LoginPageContainer/LoginPageContainer')
);

const LoginPage = () => {
  return (
    <Layout title='Login | BYLT Premium'>
      <PageTransition>
        <LoginPageContainer />
      </PageTransition>
    </Layout>
  );
};

export default LoginPage;
