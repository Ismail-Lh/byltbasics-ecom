import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ShopPageContainer } from '../../../containers';
import { useFiltersContext } from '../../../contexts/filters_context';

const MensCollections = () => {
  const { updateCollection } = useFiltersContext();

  const router = useRouter();
  const { slug } = router.query;

  const getTheCollectionTitle = route => {
    let title = '';

    const strIncludes = str => route?.includes(str);

    if (strIncludes('tops')) title = 'tops';
    if (strIncludes('drop-cuts')) title = 'drop-cuts';
    if (strIncludes('long-sleeves')) title = 'long sleeves';
    if (strIncludes('vnecks')) title = 'v-necks';
    if (strIncludes('crews')) title = 'crews';
    if (strIncludes('henleys')) title = 'henleys';

    return title;
  };

  useEffect(() => {
    updateCollection(slug, getTheCollectionTitle(slug));
  }, [slug]);

  return <ShopPageContainer />;
};

export default MensCollections;

// imgSrc='mens-crews.jpg' title='crew'

// imgSrc='mens-henleys.jpg' title='henleys'

// imgSrc='mens-drop-cuts.jpg' title='drop-cuts'

// imgSrc='mens-long-sleeves.jpg' title='long sleeves'

// imgSrc='mens-tops.jpg' title='mens tops'

// imgSrc='mens-vneck.jpg' title='v-neck'
