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

/**
 * Renders the layout component for the BYLT Basics website.
 *
 * @param {LayoutProps} props - The props for the Layout component.
 * @param {ReactNode} props.children - The content to be rendered inside the layout.
 * @param {string} [props.title] - The title of the page.
 * @param {string} [props.description] - The description of the page.
 * @returns {JSX.Element} The rendered layout component.
 */
function Layout({
  children,
  title = "BYLT Basics™ - Premium Basics",
  description = "Men's Basics are evolving. BYLT Underwear and BYLT Shirts. Get BYLT's new line of Men's Premium Basics online at a fair price. BYLT™ - Confidence starts here™",
}: LayoutProps): JSX.Element {
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
}

export default Layout;
