import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ShopPageContainer } from '../../../containers';
import { useFiltersContext } from '../../../contexts/filters_context';

const MensCollections = () => {
  const { collection, updateCollection } = useFiltersContext();

  //   const router = useRouter();
  //   const slug = router.query.slug;

  //   const getTheCollectionTitle = route => {
  //     let title = '';

  //     if (route === 'mens-tops') title = 'tops';
  //     if (route === 'mens-drop-cuts') title = 'drop-cuts';
  //     if (route === 'mens-long-sleeves') title = 'long sleeves';
  //     if (route === 'mens-vnecks') title = 'v-necks';
  //     if (route === 'mens-crews') title = 'crews';
  //     if (route === 'mens-henleys') title = 'henleys';

  //     return title;
  //   };

  //   useEffect(() => {
  //     updateCollection(slug, getTheCollectionTitle(slug));
  //   }, [slug]);

  return <ShopPageContainer />;
};

export default MensCollections;

// imgSrc='mens-crews.jpg' title='crew'

// imgSrc='mens-henleys.jpg' title='henleys'

// imgSrc='mens-drop-cuts.jpg' title='drop-cuts'

// imgSrc='mens-long-sleeves.jpg' title='long sleeves'

// imgSrc='mens-tops.jpg' title='mens tops'

// imgSrc='mens-vneck.jpg' title='v-neck'
