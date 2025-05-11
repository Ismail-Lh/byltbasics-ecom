import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { useFiltersContext } from "../../../contexts/filters_context";

const Layout = dynamic(() => import("../../../components/Layout/Layout"));

const ShopPageContainer = dynamic(
  () => import("../../../containers/ShopPageContainer/ShopPageContainer"),
);

/**
 * Renders the WomenCollections page.
 *
 * @returns The WomenCollections component.
 */
function WomenCollections() {
  const { updateCollection } = useFiltersContext();

  const router = useRouter();
  const { slug } = router.query;

  const getTheCollectionTitle = (route?: string | string[]) => {
    let title = "";

    const strIncludes = (str: string) => route?.includes(str);

    if (strIncludes("womens-tops")) title = "Women's tops";
    if (strIncludes("tank")) title = "Essential Tank";
    if (strIncludes("tee")) title = "Essential Tee";
    if (strIncludes("crop")) title = "Crop Top";
    if (strIncludes("womens-bottoms")) title = "Women's Bottoms";
    if (strIncludes("joggers")) title = "Women's Joggers";
    if (strIncludes("leggings")) title = "Women's Leggings";
    if (strIncludes("accessories")) title = "Hats & Accessories";
    if (strIncludes("hats")) title = "Hats";
    if (strIncludes("gift")) title = "Gift Cards";

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

export default WomenCollections;
