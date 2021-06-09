import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useFiltersContext } from '../../contexts/filters_context';
import { ShopPageContainer } from '../../containers';

const Collections = () => {
  const { updateCollection } = useFiltersContext();

  const router = useRouter();
  const { slug } = router.query;

  const getTheCollectionTitle = route => {
    let title = '';

    const strIncludes = str => route?.includes(str);

    if (strIncludes('men')) title = 'all men';
    if (strIncludes('women')) title = 'all women';
    if (strIncludes('bundles')) title = 'bundles';
    if (strIncludes('sales')) title = 'last call';

    return title;
  };

  useEffect(() => {
    updateCollection(slug, getTheCollectionTitle(slug));
  }, [slug]);

  return <ShopPageContainer />;
};

export default Collections;
