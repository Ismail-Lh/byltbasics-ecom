import dynamic from "next/dynamic";

import { useProductsContext } from "../../contexts/products_context";

const Layout = dynamic(() => import("../../components/Layout/Layout"));

const SingleProductContainer = dynamic(
  () =>
    import("../../containers/SingleProductContainer/SingleProductContainer"),
);

/**
 * Renders the single product page.
 *
 * @returns The JSX element representing the single product page.
 */

function SingleProductPage() {
  const {
    single_product: { single_product: product },
  } = useProductsContext();
  const { name } = product;

  return (
    <Layout title={`${name.toUpperCase()} | BYLT Premium`}>
      <SingleProductContainer />
    </Layout>
  );
}

export default SingleProductPage;
