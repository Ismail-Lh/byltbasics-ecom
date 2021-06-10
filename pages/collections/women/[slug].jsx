import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ShopPageContainer } from '../../../containers';
import { useFiltersContext } from '../../../contexts/filters_context';

const WomensCollections = () => {
  const { updateCollection } = useFiltersContext();

  const router = useRouter();
  const { slug } = router.query;

  const getTheCollectionTitle = route => {
    let title = '';

    const strIncludes = str => route?.includes(str);

    if (strIncludes('womens-tops')) title = "women's tops";
    if (strIncludes('tank')) title = 'essential tank';
    if (strIncludes('tee')) title = 'essential tee';
    if (strIncludes('crop')) title = 'crop top';
    if (strIncludes('womens-bottoms')) title = "women's bottoms";
    if (strIncludes('joggers')) title = "women's joggers";
    if (strIncludes('leggings')) title = "women's leggings";
    if (strIncludes('accessories')) title = 'hats & accessories';
    if (strIncludes('hats')) title = 'hats';
    if (strIncludes('gift')) title = 'gift cards';

    return title;
  };

  useEffect(() => {
    updateCollection(slug, getTheCollectionTitle(slug));
  }, [slug]);

  return <ShopPageContainer />;
};

export default WomensCollections;
