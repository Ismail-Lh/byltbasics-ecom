import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('../../components/Layout/Layout'));

const PageTransition = dynamic(() =>
  import('../../components/PageTransition/PageTransition')
);

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
