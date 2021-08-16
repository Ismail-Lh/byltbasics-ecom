import dynamic from 'next/dynamic';
import { PageTransition } from '../../components';

const Layout = dynamic(() => import('../../components/Layout/Layout'));

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
