import '../styles/globals.scss';

import { NavBar } from '../components';
import { FooterSection } from '../sections';

import { FirebaseProvider } from '../contexts/firebase_context';
import { ProductsProvider } from '../contexts/products_context';
import { FiltersProvider } from '../contexts/filters_context';
import { CartProvider } from '../contexts/cart_context';

import firebase from '../lib/firebase.prod';
import { addDataBase } from '../productsData';

function MyApp({ Component, pageProps }) {
  return (
    <FirebaseProvider>
      <ProductsProvider>
        <FiltersProvider>
          <CartProvider>
            <NavBar />
            <Component {...pageProps} />
            <FooterSection />
          </CartProvider>
        </FiltersProvider>
      </ProductsProvider>
    </FirebaseProvider>
  );
}
// <button onClick={() => addDataBase(firebase)}>add</button>

export default MyApp;
