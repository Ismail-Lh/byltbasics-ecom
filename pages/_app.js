import dynamic from 'next/dynamic';
import { AnimatePresence } from 'framer-motion';
import '../styles/globals.scss';

import { AuthProvider } from '../contexts/auth_context';
import { ProductsProvider } from '../contexts/products_context';
import { FiltersProvider } from '../contexts/filters_context';
import { CartProvider } from '../contexts/cart_context';
import useScroll from '../hooks/useScroll';

import { NavBar } from '../components';

const DynamicScrollToTop = dynamic(() =>
  import('../components/ScrollToTop/ScrollToTop')
);

const DynamicFooterSection = dynamic(() =>
  import('../sections/FooterSection/FooterSection')
);

// import { firebase } from '../lib/firebase.prod';
// import { addDataBase } from '../productsData';

function MyApp({ Component, pageProps, router }) {
  const { ref, inView } = useScroll();

  return (
    <AuthProvider>
      <ProductsProvider>
        <FiltersProvider>
          <CartProvider>
            <NavBar />
            <AnimatePresence
              exitBeforeEnter
              initial={false}
              onExitComplete={() => window.scrollTo(0, 0)}>
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
            <DynamicScrollToTop />
            <div ref={ref}>{inView && <DynamicFooterSection />}</div>
          </CartProvider>
        </FiltersProvider>
      </ProductsProvider>
    </AuthProvider>
  );
}
// <button onClick={() => addDataBase(firebase)}>add</button>

export default MyApp;
