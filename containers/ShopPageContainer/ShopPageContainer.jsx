import classes from './ShopPageContainer.module.scss';

import { BackgroundImage } from '../../components';
import { CollectionsContainer } from '..';

const ShopPageContainer = ({ imgSrc, title }) => {
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
