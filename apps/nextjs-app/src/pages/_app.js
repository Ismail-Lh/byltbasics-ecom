import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

import "../styles/globals.scss";
import NavBar from "../components/NavBar/NavBar";
import { AuthProvider } from "../contexts/auth_context";
import { CartProvider } from "../contexts/cart_context";
import { FiltersProvider } from "../contexts/filters_context";
import { ProductsProvider } from "../contexts/products_context";

const DynamicScrollToTop = dynamic(
  () => import("../components/ScrollToTop/ScrollToTop"),
);

const DynamicFooterSection = dynamic(
  () => import("../sections/FooterSection/FooterSection"),
);

// import { firebase } from '../lib/firebase.prod';
// import { addDataBase } from '../productsData';

function MyApp({ Component, pageProps, router }) {
  return (
    <AuthProvider>
      <ProductsProvider>
        <FiltersProvider>
          <CartProvider>
            <NavBar />
            <AnimatePresence
              mode="wait"
              initial={false}
              onExitComplete={() => window.scrollTo(0, 0)}
            >
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
            <DynamicScrollToTop />
            <DynamicFooterSection />
          </CartProvider>
        </FiltersProvider>
      </ProductsProvider>
    </AuthProvider>
  );
}
// <button onClick={() => addDataBase(firebase)}>add</button>

export default MyApp;
