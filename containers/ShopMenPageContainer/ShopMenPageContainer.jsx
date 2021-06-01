import classes from './ShopMenPageContainer.module.scss';

import { BackgroundImage } from '../../components';
import { CollectionsContainer } from '../';

const ShopMenPageContainer = () => {
  return (
    <div>
      <div className={classes.backgroundImage}>
        <BackgroundImage imgSrc='shop-men.png' title='all men' />
      </div>

      <CollectionsContainer />
    </div>
  );
};

export default ShopMenPageContainer;
