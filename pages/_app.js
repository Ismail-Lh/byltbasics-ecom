import '../styles/globals.scss';
import { NavBar } from '../components';
import { FooterSection } from '../sections';
import { ProductsProvider } from '../contexts/products_context';

function MyApp({ Component, pageProps }) {
  return (
    <ProductsProvider>
      <NavBar />
      <Component {...pageProps} />
      <FooterSection />
    </ProductsProvider>
  );
}

export default MyApp;
