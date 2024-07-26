import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import Head from "next/head";

import { useProductsContext } from "../../contexts/products_context";
import { pageTransition } from "../../utils/animations";

const DynamicProductModal = dynamic(
  () => import("../ProductModal/ProductModal"),
);

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
};

const Layout = ({
  children,
  title = "BYLT Basics™ - Premium Basics",
  description = "Men's Basics are evolving. BYLT Underwear and BYLT Shirts. Get BYLT's new line of Men's Premium Basics online at a fair price. BYLT™ - Confidence starts here™",
}: LayoutProps) => {
  const { isProductModalOpen } = useProductsContext();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <AnimatePresence initial={false}>
          {isProductModalOpen && <DynamicProductModal />}
        </AnimatePresence>
        <motion.main
          variants={pageTransition}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: "linear" }}
        >
          {children}
        </motion.main>
      </div>
    </div>
  );
};

export default Layout;
