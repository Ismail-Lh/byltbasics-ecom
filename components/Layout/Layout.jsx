import Head from 'next/head';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

import { useProductsContext } from '../../contexts/products_context';

const DynamicProductModal = dynamic(() =>
  import('../ProductModal/ProductModal')
);

const Layout = ({ title, children, description }) => {
  const { isProductModalOpen } = useProductsContext();

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />

        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        {isProductModalOpen && <DynamicProductModal />}
        <motion.main
          variants={variants}
          initial='hidden'
          animate='enter'
          exit='exit'
          transition={{ type: 'linear' }}>
          {children}
        </motion.main>
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
