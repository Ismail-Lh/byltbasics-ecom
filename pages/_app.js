import { AnimatePresence } from 'framer-motion';

import '../styles/globals.scss';

import { NavBar, ProductModal, ScrollToTop } from '../components';
import { FooterSection } from '../sections';

import { AuthProvider } from '../contexts/auth_context';
import { FirebaseProvider } from '../contexts/firebase_context';
import { ProductsProvider } from '../contexts/products_context';
import { FiltersProvider } from '../contexts/filters_context';
import { CartProvider } from '../contexts/cart_context';

// import { firebase } from '../lib/firebase.prod';
// import { addDataBase } from '../productsData';

function MyApp({ Component, pageProps, router }) {
  return (
    <AuthProvider>
      <FirebaseProvider>
        <ProductsProvider>
          <FiltersProvider>
            <CartProvider>
              <AnimatePresence exitBeforeEnter>
                <ScrollToTop />
                <NavBar />
                <ProductModal />
                <Component {...pageProps} key={router.route} />
                <FooterSection />
              </AnimatePresence>
            </CartProvider>
          </FiltersProvider>
        </ProductsProvider>
      </FirebaseProvider>
    </AuthProvider>
  );
}
// <button onClick={() => addDataBase(firebase)}>add</button>

export default MyApp;
