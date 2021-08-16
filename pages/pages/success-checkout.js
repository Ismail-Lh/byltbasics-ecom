import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('../../components/Layout/Layout'));

const PageTransition = dynamic(() =>
  import('../../components/PageTransition/PageTransition')
);

const SuccessCheckoutPageContainer = dynamic(() =>
  import(
    '../../containers/SuccessCheckoutPageContainer/SuccessCheckoutPageContainer'
  )
);

const SuccessCheckoutPage = () => {
  return (
    <Layout title='Checkout Success | BYLT Premium'>
      <PageTransition>
        <SuccessCheckoutPageContainer />
      </PageTransition>
    </Layout>
  );
};

export default SuccessCheckoutPage;
