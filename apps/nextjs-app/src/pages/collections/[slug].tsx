import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { useFiltersContext } from "../../contexts/filters_context";

const Layout = dynamic(() => import("../../components/Layout/Layout"));

const ShopPageContainer = dynamic(
  () => import("../../containers/ShopPageContainer/ShopPageContainer"),
);

/**
 * Renders the Collections page.
 *
 * @returns The JSX element representing the Collections page.
 */

function Collections() {
  const { updateCollection } = useFiltersContext();

  const router = useRouter();
  const { slug } = router.query;

  const getTheCollectionTitle = (route?: string | string[]) => {
    let title = "";

    const strIncludes = (str: string) => route?.includes(str);

    if (strIncludes("men")) title = "All Men";
    if (strIncludes("women")) title = "All Women";
    if (strIncludes("mens-bundles")) title = "Men's Bundles";
    if (strIncludes("womens-bundles")) title = "Women's Bundles";
    if (strIncludes("sales")) title = "Last Call";
    if (strIncludes("new")) title = "New";
    if (strIncludes("snow")) title = "Snow Wash";
    if (strIncludes("performance")) title = "Performance Collection";
    if (strIncludes("executive")) title = "Executive Collection";
    if (strIncludes("summer-dye-collection")) title = "Summer Dye Collection";
    if (strIncludes("new-core-collection")) title = "New Core Collection";

    return title;
  };

  const title = getTheCollectionTitle(slug);

  useEffect(() => {
    updateCollection(slug, title);
  }, [slug, title, updateCollection]);

  return (
    <Layout title={`${title} | BYLT Basics`}>
      <ShopPageContainer />
    </Layout>
  );
}

export default Collections;
