import dynamic from 'next/dynamic';

import '../styles/globals.scss';

const DynamicProductModal = dynamic(() =>
  import('../components/ProductModal/ProductModal')
);
const DynamicFooterSection = dynamic(() =>
  import('../sections/FooterSection/FooterSection')
);

import { NavBar, ScrollToTop } from '../components';

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
              <ScrollToTop />
              <NavBar />
              <DynamicProductModal />
              <Component {...pageProps} key={router.route} />
              <DynamicFooterSection />
            </CartProvider>
          </FiltersProvider>
        </ProductsProvider>
      </FirebaseProvider>
    </AuthProvider>
  );
}
// <button onClick={() => addDataBase(firebase)}>add</button>

export default MyApp;
