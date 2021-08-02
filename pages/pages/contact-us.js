import dynamic from 'next/dynamic';
import { Layout } from '../../components';

const ContactUsPageContainer = dynamic(() =>
  import('../../containers/ContactUsPageContainer/ContactUsPageContainer')
);

const ContactUsPage = () => {
  return (
    <Layout title='Customer Support | BYLT Premium'>
      <ContactUsPageContainer />
    </Layout>
  );
};

export default ContactUsPage;
