import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('../../components/Layout/Layout'));

const PageTransition = dynamic(() =>
  import('../../components/PageTransition/PageTransition')
);

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
