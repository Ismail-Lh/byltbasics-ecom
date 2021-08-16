import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('../../components/Layout/Layout'));

const PageTransition = dynamic(() =>
  import('../../components/PageTransition/PageTransition')
);

const RegisterPageContainer = dynamic(() =>
  import('../../containers/RegisterPageContainer/RegisterPageContainer')
);

const RegisterPage = () => {
  return (
    <Layout title='Create Account | BYLT Basics'>
      <PageTransition>
        <RegisterPageContainer />
      </PageTransition>
    </Layout>
  );
};

export default RegisterPage;
