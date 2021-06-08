import classes from './ShopPageContainer.module.scss';

import { BackgroundImage } from '../../components';
import { CollectionsContainer } from '..';

const ShopPageContainer = () => {
  return (
    <div>
      <div className={classes.backgroundImage}>
        <BackgroundImage />
      </div>

      <CollectionsContainer />
    </div>
  );
};

export default ShopPageContainer;
