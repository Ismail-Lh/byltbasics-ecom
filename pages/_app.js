import '../styles/globals.scss';
import { NavBar } from '../components';
import { FooterSection } from '../sections';
import { ProductsProvider } from '../contexts/products_context';
import { FirebaseProvider } from '../contexts/firebase_context';

import firebase from '../lib/firebase.prod';
import { addDataBase } from '../productsData';

function MyApp({ Component, pageProps }) {
  return (
    <FirebaseProvider>
      <ProductsProvider>
        <NavBar />
        <Component {...pageProps} />
        <FooterSection />
      </ProductsProvider>
    </FirebaseProvider>
    // <button onClick={() => addDataBase(firebase)}>add</button>
  );
}

export default MyApp;
