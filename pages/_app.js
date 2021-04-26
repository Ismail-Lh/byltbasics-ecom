import '../styles/globals.scss';
import { NavBar } from '../components';
import { FooterSection } from '../sections';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <FooterSection />
    </>
  );
}

export default MyApp;
