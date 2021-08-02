import dynamic from 'next/dynamic';

import { Layout } from '../../components';
const LoginPageContainer = dynamic(() =>
  import('../../containers/LoginPageContainer/LoginPageContainer')
);

const LoginPage = () => {
  return (
    <Layout title='Login | BYLT Premium'>
      <LoginPageContainer />
    </Layout>
  );
};

export default LoginPage;
