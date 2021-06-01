import { useEffect } from 'react';
import classes from './ShopPageContainer.module.scss';

import { useFiltersContext } from '../../contexts/filters_context';
import { BackgroundImage } from '../../components';
import { CollectionsContainer } from '..';

const ShopPageContainer = ({ imgSrc, title, products }) => {
  const { getProductsByGender } = useFiltersContext();

  useEffect(() => {
    getProductsByGender(products);
  }, []);

  return (
    <div>
      <div className={classes.backgroundImage}>
        <BackgroundImage imgSrc={imgSrc} title={title} />
      </div>

      <CollectionsContainer />
    </div>
  );
};

export default ShopPageContainer;
