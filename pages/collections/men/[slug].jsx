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

    // Men's tops collections
    if (strIncludes('mens-tops')) title = 'tops';
    if (strIncludes('drop-cuts')) title = 'drop-cuts';
    if (strIncludes('long-sleeves')) title = 'long sleeves';
    if (strIncludes('vnecks')) title = 'v-necks';
    if (strIncludes('crews')) title = 'crews';
    if (strIncludes('henleys')) title = 'henleys';
    if (strIncludes('polos')) title = 'polos';
    if (strIncludes('executive')) title = 'executive collection';
    if (strIncludes('dotted')) title = 'dotted collection';
    if (strIncludes('striped')) title = 'stripes';
    if (strIncludes('tanks')) title = 'tanks';

    // Men's bottoms collections
    if (strIncludes('mens-bottoms')) title = 'bottoms';
    if (strIncludes('shorts')) title = 'shorts';
    if (strIncludes('mens-joggers')) title = 'joggers';
    if (strIncludes('mens-pants')) title = 'pants';

    // Men's outerwear collections
    if (strIncludes('outerwear')) title = 'outerwear';
    if (strIncludes('pullovers')) title = 'pullovers';
    if (strIncludes('jackets')) title = 'jackets';

    // Men's underwear collections
    if (strIncludes('underwear')) title = 'underwear';
    if (strIncludes('boxer')) title = 'boxer briefs';
    if (strIncludes('trunks')) title = 'trunks';

    // Accessories collections
    if (strIncludes('accessories')) title = 'hats & accessories';
    if (strIncludes('hats')) title = 'hats';
    if (strIncludes('socks')) title = 'socks';

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
