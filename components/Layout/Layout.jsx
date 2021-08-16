import Head from 'next/head';
import dynamic from 'next/dynamic';

import { NavBar } from '..';

const DynamicScrollToTop = dynamic(() => import('../ScrollToTop/ScrollToTop'));

const DynamicProductModal = dynamic(() =>
  import('../ProductModal/ProductModal')
);
const DynamicFooterSection = dynamic(() =>
  import('../../sections/FooterSection/FooterSection')
);

const Layout = ({ title, children, description }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />

        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <NavBar />
        <DynamicProductModal />
        <main>{children}</main>
        <DynamicFooterSection />
        <DynamicScrollToTop />
      </div>
    </div>
  );
};

Layout.defaultProps = {
  title: 'BYLT Basics™ - Premium Basics',
  description:
    "Men's Basics are evolving. BYLT Underwear and BYLT Shirts. Get BYLT's new line of Men's Premium Basics online at a fair price. BYLT™ - Confidence starts here™",
};

export default Layout;
