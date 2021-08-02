import dynamic from 'next/dynamic';
import { Layout } from '../../components';

const RegisterPageContainer = dynamic(() =>
  import('../../containers/RegisterPageContainer/RegisterPageContainer')
);

const RegisterPage = () => {
  return (
    <Layout title='Create Account | BYLT Basics'>
      <RegisterPageContainer />
    </Layout>
  );
};

export default RegisterPage;
