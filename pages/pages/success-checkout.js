import dynamic from 'next/dynamic';

import { PageTransition } from '../../components';

const Layout = dynamic(() => import('../../components/Layout/Layout'));

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
