import dynamic from 'next/dynamic';

import { PageTransition } from '../../components';

const Layout = dynamic(() => import('../../components/Layout/Layout'));

const ContactUsPageContainer = dynamic(() =>
  import('../../containers/ContactUsPageContainer/ContactUsPageContainer')
);

const ContactUsPage = () => {
  return (
    <Layout title='Customer Support | BYLT Premium'>
      <PageTransition>
        <ContactUsPageContainer />
      </PageTransition>
    </Layout>
  );
};

export default ContactUsPage;
